"use strict";
{
  const rocket = document.getElementById("rocket");
  let y = 0;
  let x=0
  function moveRocket(direction) {
    switch (direction) {
      case "w":
        y -= 16;
        break;
      case "a":
        x -= 16;
        break;
        case "s":
          y += 16;
          break;
        case "d":
          x += 16;
          break;
    }
    rocket.style.transform = `translate(${x}px,${y}px)`;
}

  window.addEventListener("keydown", (e) => {
    moveRocket(e.key);
  }
  )

}


