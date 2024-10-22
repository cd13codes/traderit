function registerUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    // Store user input in localStorage for demo purposes
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to login page
       if(isNaN(username)){
       if (password==cpassword && isNaN(password) ) {
        alert("Password set successfully.");
        window.location.href = "traderit.html";}
       else {
        alert("Please confirm your password again and make sure the password is mixtute of numbers and alphabets");
        } }
        else{
            alert(
                "make sure the user name doesnt contain numbers and all the fields are filled"
            )
        }
    
}
