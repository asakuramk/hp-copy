const next = document.getElementById("next");
const end = document.getElementById("end");
const text_1 = document.getElementById("text_1");
const text_2 = document.getElementById("text_2");
const text_3 = document.getElementById("text_3");

next.addEventListener("click", () => {
  if (text_1.classList.contains("hidden") == false) {
    text_1.classList.add("hidden");
    text_2.classList.remove("hidden");
  } else if (text_2.classList.contains("hidden") == false) {
    text_2.classList.add("hidden");
    text_3.classList.remove("hidden");
    end.classList.remove("hidden");
    next.classList.add("hidden");
  } 
 })
