const message = document.getElementById("message");
var stat = document.getElementById("status");

// message.addEventListener("input", () => {
//   const num = message.value.length;
//   if (num) {
//     stat.textContent = `${message.value.length}文字入力されています。`;
//   } else {
//     stat.textContent = "";
//   }
// });


message.addEventListener('input', () => {
  const msgLength = message.value.length;
  
  stat.textContent = (msgLength == 0)
    ? ''
    :`${msgLength} 文字入力されています`;
});