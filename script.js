function validateForm() {
    // Get form elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var errorMessage = document.getElementById("errorMessage");

    // Clear previous error messages
    errorMessage.innerHTML = "";

    // Validate Name
    if (name.trim() === "") {
        errorMessage.innerHTML = "Name is required.";
        return false;
    }

    // Validate Email (simple email pattern)
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessage.innerHTML = "Please enter a valid email address.";
        return false;
    }

    // Validate Subject
    if (subject.trim() === "") {
        errorMessage.innerHTML = "Subject is required.";
        return false;
    }

    // Validate Message
    if (message.trim() === "") {
        errorMessage.innerHTML = "Message is required.";
        return false;
    }

    // If all validations pass, allow form submission
    return true;
}