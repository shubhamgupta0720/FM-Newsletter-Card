function formSubmit(event){
    event.preventDefault();
    var inputField = document.getElementById('email');
    var emailError = document.getElementById("email-error");
    if (inputField.value.trim() === "") {
        inputField.style.borderColor = "red"; // Change border color to red
        emailError.style.display = "block"; // Display the error message
    } else {
        inputField.style.borderColor = ""; // Reset border color
        emailError.style.display = "none"; // Hide the error message
        // If email is not empty, you can submit the form here
        // e.g., event.target.submit();
    }
}