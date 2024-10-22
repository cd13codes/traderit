document.addEventListener('DOMContentLoaded', function () {
    const listingForm = document.getElementById('listing-form');
    const listingContainer = document.getElementById('listing-container');
    const submitButton = document.getElementById('submit-listing');

    submitButton.addEventListener('click', function () {
        const title = document.getElementById('title').value;
        const image = document.getElementById('image').files[0];
        
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
       

        if (title && description && price && image) {
            const listingItem = document.createElement('div');
            listingItem.classList.add('listing-item');

            listingItem.innerHTML = `
                <h4>${title}</h4>
                <img src="${URL.createObjectURL(image)}" alt="Listing Image">
               
                <p>${description}</p>
                <p>Price: Rs ${price}</p>
            
            `;

            listingContainer.appendChild(listingItem);

            // Reset the form
            listingForm.reset();
        } else {
            alert('Please fill in all fields and select an image.');
        }
    });
});
