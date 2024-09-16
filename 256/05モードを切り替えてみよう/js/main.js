const light = document.getElementById("light");
const dark = document.getElementById("dark");
light.classList.add("yellow-bg");

light.addEventListener("click", () => {
  light.classList.add("yellow-bg");
  dark.classList.remove("yellow-bg");
  
  document.querySelector("body").style.background = "white";
  document.querySelector("body").style.color = "black";
  })


dark.addEventListener("click", () => {
  dark.classList.add("yellow-bg");
  light.classList.remove("yellow-bg");

  document.querySelector("body").style.background = "black";
  document.querySelector("body").style.color = "white";
})