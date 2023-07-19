
const fileInput = document.getElementById('zip-upload');
const uploadLabel = document.getElementById('upload-files');

fileInput.addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const files = event.target.files;
    if (files.length > 0) {
      const fileName = files[0].name;
      uploadLabel.textContent = fileName;
    }
}
function validateForm() {
    // Get form elements
    var firstName = document.getElementById("firstname").value;

    if (firstName === "" /* || other fields are empty */) {
        alert("Please fill out all required fields.");
        return false;
    }

    // Validate email format using regular expression
    var email = document.getElementById("email").value;
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format. Please enter a valid email address.");
        return false;
    }

    // Validate phone number format using regular expression
    var phoneNumber = document.getElementById("phone").value;
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert("Invalid phone number format. Please enter a 10-digit phone number.");
        return false;
    }

    return true;
}
