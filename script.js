function validate() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var course = document.getElementById("course").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var addressError = document.getElementById("addressError");
    var courseError = document.getElementById("courseError");
    var genderError = document.getElementById("genderError");
    var emailError = document.getElementById("emailError");
    var phoneNumberError = document.getElementById("phoneNumberError");

    var isValid = true;
    firstNameError.innerHTML = "";
    lastNameError.innerHTML = "";
    addressError.innerHTML = "";
    courseError.innerHTML = "";
    genderError.innerHTML = "";
    emailError.innerHTML = "";
    phoneNumberError.innerHTML = "";
    if (firstName.trim() === "") {
        firstNameError.innerHTML = "First Name is required";
        isValid = false;
    }

    if (lastName.trim() === "") {
        lastNameError.innerHTML = "Last Name is required";
        isValid = false;
    }

    if (address.trim() === "") {
        addressError.innerHTML = "Address is required";
        isValid = false;
    }

    if (course.trim() === "") {
        courseError.innerHTML = "Course is required";
        isValid = false;
    }

    if (gender === "") {
        genderError.innerHTML = "Please select a gender";
        isValid = false;
    }

    if (email.trim() === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Invalid email address";
        isValid = false;
    }

    if (phoneNumber.trim() === "") {
        phoneNumberError.innerHTML = "Phone Number is required";
        isValid = false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
        phoneNumberError.innerHTML = "Invalid phone number";
        isValid = false;
    }
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); 
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}
