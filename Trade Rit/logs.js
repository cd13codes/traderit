function loginUser() {
    var inputUsername = document.getElementById("username").value;
    var inputPassword = document.getElementById("password").value;
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
    if(isNaN(inputUsername )){
    if (inputUsername === storedUsername && inputPassword === storedPassword) {
        //alert("Login successful! Welcome, " + inputUsername + "!");
       
        window.location.href = "sell.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }}
    else{alert("Invalid username or password. Please try again.");}
}