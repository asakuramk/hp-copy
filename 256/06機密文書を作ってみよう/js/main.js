const lock = document.getElementById("lock");


lock.addEventListener("click", () => {
  lock.classList.toggle("bi-unlock-fill");
  // alert("i")
  document.querySelectorAll("span").forEach((spanElem) => {
    spanElem.classList.toggle("click");
  })
})