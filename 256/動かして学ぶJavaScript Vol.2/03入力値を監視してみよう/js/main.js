const emailObj = document.getElementById("email");
const loginObj = document.getElementById("login");
const passwordObj = document.getElementById("password");



let emailTxt = "";
let isInputEmail = false;
let isInputPassword = false;


emailObj.addEventListener("input", () => {
  isInputEmail = emailObj.value.length > 0;
  changeStatus();
})


passwordObj.addEventListener("input", () => {
  isInputPassword = passwordObj.value.length > 0;
  changeStatus();
})



function changeStatus() {
  if (isInputEmail && isInputPassword) {
    loginObj.classList.remove("disabled");
  } else {
    loginObj.classList.add("disabled");
  }

  
}