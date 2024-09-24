const smiley = document.getElementById("smiley");
const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  smiley.style.transform=`rotate(${e.clientX/window.innerWidth}turn)`;
  console.log(typeof(e.clientX/window.innerWidth*360));

})
