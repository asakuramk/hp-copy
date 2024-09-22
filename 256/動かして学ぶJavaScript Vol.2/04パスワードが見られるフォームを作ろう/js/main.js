const passElem = document.getElementById("password");
const eyeElem = document.getElementById("eye");

passElem.addEventListener("input", () => {
  if (passElem.value.length > 0) {
    eyeElem.classList.remove("hidden");
  } else {
    eyeElem.classList.add("hidden");
  }
})

eyeElem.addEventListener("click", () => {
  if (passElem.type == "password") {
    passElem.type = "string";
    console.log(passElem.type);
  } else {
    passElem.type = "password";
    console.log(passElem.type);
  }
  
})