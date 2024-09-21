const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
let emailText = "";
let passText = "";

email.addEventListener("input", () => {
  emailText = email.textContent;
})

console.log(emailText);