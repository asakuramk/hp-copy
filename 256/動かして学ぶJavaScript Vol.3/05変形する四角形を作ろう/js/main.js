// 右の仕様を満たすように JavaScript を使って実装してみましょう
"use strict";
{
  const btn = document.getElementById("btn");
  const box = document.getElementById("box");
  
  function newHeight() {
    return (Math.random() * 3 + 0.5) * box.clientHeight;
  };
  

  function newWidth() {
    return (Math.random() * 3 + 0.5) * box.clientWidth;
  };
 


  btn.addEventListener("click", () => {
    console.log(box.style.width);
    box.style.clientHeight = newHeight();
    box.style.clientWidth = newWidth();
    console.log(box.width)
  })




}
