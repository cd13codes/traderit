<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Listing Form Example</title>
  <style>
    .listing-item {
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

<form id="listing-form">
  <label for="title">Title:</label>
  <input type="text" id="title" required>

  <label for="image">Image:</label>
  <input type="file" id="image" accept="image/*" required>

  <label for="description">Description:</label>
  <textarea id="description" required></textarea>

  <label for="price">Price (₹):</label>
  <input type="text" id="price" required>

  <button type="button" id="submit-listing">Submit Listing</button>
</form>

<div id="listing-container"></div>

<script>
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
          <p>Price: ₹${price}</p>
        `;

        listingContainer.appendChild(listingItem);

        // Reset the form
        listingForm.reset();
      } else {
        alert('Please fill in all fields and select an image.');
      }
    });
  });
</script>

</body>
</html>
