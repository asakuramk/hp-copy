const contents = document.getElementById("contents");
const more = document.getElementById("more");
more.addEventListener("click", () => {
  contents.classList.add("appear");
  more.textContent = "";
})