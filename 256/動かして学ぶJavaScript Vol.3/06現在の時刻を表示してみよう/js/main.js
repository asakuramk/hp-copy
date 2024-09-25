const clock = document.getElementById("clock");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  
const d = new Date();
const hour = String(d.getHours()).padStart(2,"0");
const minute = String(d.getMinutes()).padStart(2,"0");
const seconds = String(d.getSeconds()).padStart(2,"0");
const miliseconds = String(d.getMilliseconds()).padStart(3,"0");
  clock.textContent = `${hour}:${minute}:${seconds}.${miliseconds}`;
})
