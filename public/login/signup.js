document.getElementById("signup-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    const response = await fetch("https://fitness-backend-cel1.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    const messageElement = document.getElementById("message");

    messageElement.textContent = result.message;
    messageElement.style.color = response.ok ? "green" : "red";
});
