const more = document.getElementById("more");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {

  if (more.classList.contains("appear")) {
    more.classList.remove("appear")
    btn.textContent="閉じる"
  }
  else {
    more.classList.add("appear");
    btn.textContent="もっと読む"
  }
}
)