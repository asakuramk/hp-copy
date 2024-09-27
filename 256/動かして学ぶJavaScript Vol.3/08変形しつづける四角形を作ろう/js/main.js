const area = document.getElementById("area");
const box = document.getElementById("box");

function areaRec(x,y) {
  return Math.floor(x * y * 10000);
}

function makeBox() {
  const x = Math.random() * 3 + 0.5;
  const y = Math.random() * 3 + 0.5;
  box.style.transform = `scale(${x},${y})`;
  const boxArea = areaRec(x, y);
  area.textContent = `現在の面積: ${boxArea.toLocaleString()}`
  setTimeout(makeBox, 1000);
}

makeBox();

