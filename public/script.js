document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "your_username" && password === "your_password") {
        document.getElementById("error-message").textContent = "Login successful!";
    } else {
        document.getElementById("error-message").textContent = "Incorrect username or password.";
    }
});
