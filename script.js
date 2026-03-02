document.addEventListener("DOMContentLoaded", function () {

    const clickBtn = document.getElementById("clickBtn");
    const displayImg = document.getElementById("displayImg");

    if (clickBtn && displayImg) {
        const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg"];
        let currentIndex = 0;

        clickBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            displayImg.src = images[currentIndex];
        });
    }

    const form = document.getElementById("registrationForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            clearErrors();

            let isValid = true;

            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const age = document.getElementById("age").value.trim();
            const phone = document.getElementById("phoneNumber").value.trim();

            if (firstName.length < 2) {
                showError("firstNameError", "First name must be at least 2 characters.");
                isValid = false;
            }

            if (lastName.length < 2) {
                showError("lastNameError", "Last name must be at least 2 characters.");
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showError("emailError", "Enter a valid email address.");
                isValid = false;
            }

            const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (!passwordPattern.test(password)) {
                showError("passwordError", "Password must be 8+ characters, include 1 uppercase and 1 number.");
                isValid = false;
            }

            if (password !== confirmPassword) {
                showError("confirmPasswordError", "Passwords do not match.");
                isValid = false;
            }

            if (age) {
                if (isNaN(age) || age < 18 || age > 100) {
                    showError("ageError", "Age must be between 18 and 100.");
                    isValid = false;
                }
            }

            if (phone) {
                const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
                if (!phonePattern.test(phone)) {
                    showError("phoneError", "Phone must be XXX-XXX-XXXX format.");
                    isValid = false;
                }
            }

            if (isValid) {
                const userData = {
                    firstName,
                    lastName,
                    email,
                    password
                };

                if (age) userData.age = Number(age);
                if (phone) userData.phoneNumber = phone;

                console.log(userData);
                alert("Form submitted successfully! Check console for JSON.");
                form.reset();
            }
        });
    }

    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function clearErrors() {
        const errors = document.querySelectorAll(".error");
        errors.forEach(error => error.textContent = "");
    }
});
