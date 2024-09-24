const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const body=document.querySelector("body")
let rValue=""
let r = 0;
let g = 0;
let b = 0;


function changeColor() { 
  body.style.backgroundColor = `rgb(${r},${g} ,${b})`;
  console.log(`rgb(${r},${g} ,${b})`);
}
  
  

red.addEventListener("input", (e) => {
  r = e.target.value;
  changeColor();
});


  green.addEventListener("input", (e) => {
    g = (parseInt(e.target.value)).toString(16);
    changeColor();
  });

  blue.addEventListener("input", (e) => {
    b = (parseInt(e.target.value)).toString(16);
    changeColor();
  });
