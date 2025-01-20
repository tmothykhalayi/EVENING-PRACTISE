document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    // Simulate form submission for demonstration
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission for demo purposes
        
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        if (username === "" || password === "") {
            alert("Please fill in both fields.");
            return;
        }

        // Display a loading animation or message during the fake login process
        const submitButton = document.querySelector('.btn');
        submitButton.value = "Logging in...";
        submitButton.disabled = true;

        // Simulate a delay for the login process (e.g., 2 seconds)
        setTimeout(function () {
            // Reset the form and button
            submitButton.value = "Login";
            submitButton.disabled = false;
            
            // Simulate a successful login
            alert("Login Successful!");
            loginForm.reset(); // Reset the form fields
        }, 2000); // 2 seconds delay for simulation
    });

    // Optional: Animation for form focus transition
    const inputs = document.querySelectorAll('.textbox input');
    inputs.forEach(input => {
        input.addEventListener("focus", function () {
            input.style.transition = "0.3s ease-in-out";
            input.style.transform = "scale(1.05)";
        });

        input.addEventListener("blur", function () {
            input.style.transition = "0.3s ease-in-out";
            input.style.transform = "scale(1)";
        });
    });
});
