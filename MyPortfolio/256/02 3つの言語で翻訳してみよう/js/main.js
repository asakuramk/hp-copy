const jp = document.getElementById("btn_jp");
const en = document.getElementById("btn_en");
const sp = document.getElementById("btn_sp");
const target = document.getElementById("target");
const btnArray = [jp,en,sp]

function reset() {
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = false;
  })
}

btnArray[0].addEventListener("click", () => {
  reset();
  target.textContent = "ありがとう！";
  btnArray[0].disabled = true;
})

btnArray[1].addEventListener("click", () => {
  reset();
  target.textContent = "Thank you!";
  btnArray[1].disabled = true;
})

btnArray[2].addEventListener("click", () => {
  reset();
  target.textContent = "Gracias!";
  btnArray[2].disabled = true;

})