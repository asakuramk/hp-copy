const message = document.getElementById("message");
var stat = document.getElementById("status");

message.addEventListener("input", () => {
  stat.textContent = `${message.value.length}文字入力されています。`;

});
