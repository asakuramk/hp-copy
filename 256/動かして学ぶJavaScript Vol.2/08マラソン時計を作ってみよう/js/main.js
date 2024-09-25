let total = 42.195
const slider = document.getElementById("slider");
const meter = document.getElementById("meter");
const result = document.getElementById("result");


slider.addEventListener("input", () => {
  const num = slider.value / 42195;
  const dist = (num * 42.195).toFixed(3);
  const total = 24 * 60 * num;
  const hour = Math.floor(total / 60);
  const min = Math.floor(total % 60);
  meter.textContent = dist;

  result.textContent=`${String(hour).padStart(2,"0")}:${String(min).padStart(2,"0")}`


})