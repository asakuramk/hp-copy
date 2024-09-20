const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");



shuffle.addEventListener("click", () => {
  shuffle.classList.toggle("color")
});

repeat.addEventListener("click", () => {
  repeat.classList.add("bi-repeat-1");
  repeat.classList.remove("bi-repeat")
});
