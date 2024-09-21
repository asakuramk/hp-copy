const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");
let count = 0;


shuffle.addEventListener("click", () => {
  shuffle.classList.toggle("color")
});

repeat.addEventListener("click", () => {
  

  switch (count) {
    case 0:
      repeat.classList.add("color");
      count++;
      break;
    case 1:
      repeat.classList.replace("bi-repeat","bi-repeat-1")
      count++;
      break;
    default:
      repeat.classList.remove("color");
      repeat.classList.replace("bi-repeat-1","bi-repeat")
      count = 0;
  }
})
