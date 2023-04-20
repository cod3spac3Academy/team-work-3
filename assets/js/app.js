window.addEventListener("load", () => {
  let imageArray = [
    "url(img/slider/1.jpg)",
    "url(img/slider/2.jpg)",
    "url(img/slider/3.jpg)",
    "url(img/slider/4.jpg)",
    "url(img/slider/5.jpg)",
    "url(img/slider/6.jpg)",
  ];
  let slider = document.querySelector("section.slider");
  let buttons = slider.querySelectorAll("button");
  console.log(buttons);
  let currentIndex = 0;
  let sliderLength = imageArray.length;

  function changeBackground() {
    slider.style.backgroundImage = imageArray[currentIndex]; //esto es para que cambie la imagen de fondo
    // slider.style.transition = "all 1s ease-in-out";
    // slider.classList.add("fade");
    if (
      currentIndex > 0 &&
      !buttons[currentIndex].classList.contains("white")
    ) {
      buttons[currentIndex - 1].classList.remove("white");
    } else {
      if (buttons[sliderLength - 1].classList.contains("white")) {
        buttons[sliderLength - 1].classList.remove("white");
      }
    }
    buttons[currentIndex].classList.add("white");
    currentIndex++;

    if (currentIndex == sliderLength) {
      //esto es para que vuelva a empezar el ciclo cuando el indice sea igual a la longitud del array
      currentIndex = 0;
    }
  }

  let id = setInterval(changeBackground, 1000); //esto es para que se ejecute la funcion cada 1 segundo

  buttons.forEach((button, index, list) => {
    button.addEventListener("click", () => {
      list.forEach((element) => {
        if (element.classList.contains("white")) {
          element.classList.remove("white");
        }
      });
      button.classList.add("white");
      slider.style.backgroundImage = imageArray[index]; //esto es para que cambie la imagen de fondo cuando se hace click en los botones
      clearInterval(id); //esto es para que se detenga el intervalo de automatizacion de la funcion
    });
  });
  // buttons.forEach((button, index, list) => {
  //   setInterval(button.fireEvent("click", 1000));
  // });
});
