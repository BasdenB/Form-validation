function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Simple validation checks
    if (name === "") {
      showError("name", "Please enter your name");
      return;
    }
    
    if (email === "") {
      showError("email", "Please enter your email");
      return;
    }
    
    if (!isValidEmail(email)) {
      showError("email", "Please enter a valid email");
      return;
    }
    
    if (password === "") {
      showError("password", "Please enter your password");
      return;
    }
    
    // If all validations passed, show success message
    showSuccess();
  }
  
  function showError(field, message) {
    // Add error message below the input field
    var errorElement = document.createElement("p");
    errorElement.className = "error-message";
    errorElement.innerText = message;
    
    var inputField = document.getElementById(field);
    inputField.parentNode.insertBefore(errorElement, inputField.nextSibling);
  }
  
  function showSuccess() {
    // Remove any existing error messages
    var errorMessages = document.getElementsByClassName("error-message");
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].remove();
    }
    
    // Show success message
    alert("Form submitted successfully!");
  }
  
  function isValidEmail(email) {
    // Simple email validation using regular expression
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  
  