// Validate Name
function validateName() {
    var name = document.getElementById("name").value;
    var msg = document.getElementById("nameMsg");

    if (name.trim() === "") {
        msg.innerHTML = "Name cannot be empty";
        msg.style.color = "red";
        return false;
    } else {
        msg.innerHTML = "Valid Name";
        msg.style.color = "green";
        return true;
    }
}

// Validate Email
function validateEmail() {
    var email = document.getElementById("email").value;
    var msg = document.getElementById("emailMsg");

    if (!email.includes("@")) {
        msg.innerHTML = "Email must contain '@'";
        msg.style.color = "red";
        return false;
    } else {
        msg.innerHTML = "Valid Email";
        msg.style.color = "green";
        return true;
    }
}

// Validate Age
function validateAge() {
    var age = document.getElementById("age").value;
    var msg = document.getElementById("ageMsg");

    if (age === "" || Number(age) <= 18) {
        msg.innerHTML = "Age must be greater than 18";
        msg.style.color = "red";
        return false;
    } else {
        msg.innerHTML = "Valid Age";
        msg.style.color = "green";
        return true;
    }
}

// Submit Form
function submitForm() {

    var isNameValid = validateName();
    var isEmailValid = validateEmail();
    var isAgeValid = validateAge();

    if (isNameValid && isEmailValid && isAgeValid) {

        var userData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            age: document.getElementById("age").value
        };

        sessionStorage.setItem("registeredUser", JSON.stringify(userData));

        document.getElementById("finalMsg").innerHTML =
            "<span style='color:green;'>Registration Successful! Data stored in sessionStorage.</span>";

    } else {

        document.getElementById("finalMsg").innerHTML =
            "<span style='color:red;'>Please fix errors before submitting.</span>";
    }
}