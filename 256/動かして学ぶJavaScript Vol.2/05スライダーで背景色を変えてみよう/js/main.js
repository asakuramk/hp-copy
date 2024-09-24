// 右の仕様を満たすように JavaScript を使って実装してみましょう

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const body = document.querySelector("body");

let redValue = 0;
let greenValue = 0;
let blueValue = 0;
function setBackground(){
  // body.style.backgroundColor = `"rgb(${redValue},${greenValue},${blueValue})"`;
  body.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
}


red.addEventListener('input',()=>{
  redValue = red.value;
  console.log(redValue);
  setBackground();
});
green.addEventListener("input",()=>{
    greenValue=green.value;
    console.log(greenValue);
    setBackground();
  });
blue.addEventListener("input",()=>{
    blueValue=blue.value;
    console.log(blueValue);
    setBackground();
  });
  
