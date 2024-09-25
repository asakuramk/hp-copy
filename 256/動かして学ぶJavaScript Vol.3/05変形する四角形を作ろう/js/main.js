// 右の仕様を満たすように JavaScript を使って実装してみましょう
"use strict";
{
  const btn = document.getElementById("btn");
  const box = document.getElementById("box");
  
  function newHeight() {
    return (Math.random()*3+0.5) ;
  };
  
  function newWidth() {
    return (Math.random() * 3 + 0.5) ;
  };
 
  btn.addEventListener("click", () => {
    box.style.transform=`scale(${newWidth()},${newHeight()})`;
  })

}
