const btn_jp = document.getElementById("btn_jp");
const btn_en = document.getElementById("btn_en");
const btn_sp = document.getElementById("btn_sp");
const target = document.getElementById("target");

btn_jp.addEventListener(click, () => {
  target.textContent = "ありがとう！";
  btn_jp.disabled = true;
  btn_en.disabled = false;
  btn_sp.disabled = false;
})

btn_en.addEventListener(click, () => {
  target.textContent = "Thank you!";
  btn_jp.disabled = false;
  btn_en.disabled = true;
  btn_sp.disabled = false;
})

btn_sp.addEventListener(click, () => {
  target.textContent = "Danke";
  btn_jp.disabled = false;
  btn_en.disabled = false;
  btn_sp.disabled = true;
})