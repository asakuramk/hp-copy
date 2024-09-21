const light = document.getElementById("light");
const dark = document.getElementById("dark");
const body = document.querySelector("body");
light.classList.add("yellow-bg");

// light.addEventListener("click", () => {
//   light.classList.add("yellow-bg");
//   dark.classList.remove("yellow-bg");
//   document.querySelector("body").style.background = "white";
//   document.querySelector("body").style.color = "black";
//   })

// dark.addEventListener("click", () => {
//   dark.classList.add("yellow-bg");
//   light.classList.remove("yellow-bg");
//   document.querySelector("body").style.background = "black";
//   document.querySelector("body").style.color = "white";
// })

const biElement = document.querySelectorAll(".bi");
light.classList.toggle("color");

function changeColor() {
  light.classList.toggle("color");
  dark.classList.toggle("color");
  body.classList.toggle("color");
}

biElement.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.id == "light") {
      changeColor();
    } else {
      changeColor();
    }
  })
})