const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");
let count = 0;


shuffle.addEventListener("click", () => {
  shuffle.classList.toggle("color")
});


repeat.addEventListener("click", () => {
  if (count == 0) {
    repeat.classList.add("color");
    count ++;
  } else if (count == 1) {
    repeat.classList.add("bi-repeat-1");
    repeat.classList.remove("bi-repeat");
    count++;
  } else {
    repeat.classList.remove("color");
    repeat.classList.remove("bi-repeat-1");
    repeat.classList.add("bi-repeat");
    count = 0;
  }

});
