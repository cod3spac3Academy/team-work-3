// primera parte para conseguir que el header se mueva hacia arriba con el scroll
let header = document.querySelector("header");
let InitialScrollPos = window.pageYOffset; //almacenamos la posición inicial del scroll
window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset; //almacenamos la posición actual del scroll
  if (InitialScrollPos > currentScrollPos) {
    //scroll hacia arriba
    //mostrar el header si se ocultó
    header.classList.remove("hide");
  } else {
    //scroll hacia abajo
    //ocultar el header
    header.classList.add("hide");
  }
  InitialScrollPos = currentScrollPos; //actualizamos la posición anterior del scroll
});
//quitamos y ponemos la clase invisible para el menu de modo movil
let nav = document.querySelector("nav");
let TG = document.querySelector(".HackTGame");
TG.addEventListener("click", () => {
  nav.classList.remove("invisible");
});
nav.firstElementChild.firstElementChild.addEventListener("click", () => {
  nav.classList.add("invisible");
});
