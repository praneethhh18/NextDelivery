const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});
document.getElementById("loginButton").addEventListener("click", function() {
    window.location.href = "index.html";
});

// Assuming you have a form with an id "login-form"
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Add your login logic here

    // After successful login, redirect to index.html
    window.location.href = 'index.html';
});
