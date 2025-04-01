document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".button-toggle"); // Ahora usa button-toggle
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});

//console.log("Hello, World!");

/*document.querySelector(".parrafo").textContent = "Hola, soy un nuevo texto";

const btn = document.querySelector("#cambia-color"); // Selecciona por id

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}*/

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", changeBackground);
