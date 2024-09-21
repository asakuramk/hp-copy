const me = document.getElementById("me");
const you = document.getElementById("you");
const swap = document.getElementById("swap");
let temp = "";

swap.addEventListener("click", () => {
  temp = me.textContent;
  me.textContent = you.textContent;
  you.textContent = temp;
})