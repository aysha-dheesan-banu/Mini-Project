document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://fitness-backend-cel1.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        const messageElement = document.getElementById("message");

        if (response.ok) {
            // Store username in localStorage
            localStorage.setItem("username", username);

            messageElement.textContent = "Login successful! Redirecting...";
            messageElement.style.color = "green";

            // Redirect to index.html after 2 seconds
            setTimeout(() => {
                window.location.href = "https://aysha-dheesan-banu.github.io/Mini-Project/public/index.html";

            }, 2000);
        } else {
            messageElement.textContent = result.message || "Invalid username or password!";
            messageElement.style.color = "red";
        }
    } catch (error) {
        console.error("Login Error:", error);
        document.getElementById("message").textContent = "Server error! Try again later.";
    }
});
