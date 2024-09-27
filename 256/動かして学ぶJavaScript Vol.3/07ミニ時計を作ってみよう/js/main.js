const clock = document.getElementById("clock");


function convertTime(time) {
  return String(time).padStart(2, "0");
};

function makeClock() {
  const d = new Date();
  const h = convertTime(d.getHours());
  const m = convertTime(d.getMinutes());
  const s = convertTime(d.getSeconds());
  clock.textContent=`${h}:${m}:${s}`
  setTimeout(makeClock, 100);
}

makeClock();