window.addEventListener("load", () => {
  let imageArray = [
    "url(img/slider/1.jpg)",
    "url(img/slider/2.jpg)",
    "url(img/slider/3.jpg)",
    "url(img/slider/4.jpg)",
    "url(img/slider/5.jpg)",
    "url(img/slider/6.jpg)",
  ];
  let slider = document.querySelector(".slider");
  let buttons = slider.querySelectorAll("button");
  console.log(buttons);
  //urls como arrays
  let currentIndex = 0;
  let sliderLength = imageArray.length;
  function changeBackground() {
    slider.style.backgroundImage = imageArray[currentIndex];
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
    // buttons[currentIndex].classList.add("white");
    // buttonsList.children[currentIndex].classList.add("")
    currentIndex++;

    if (currentIndex == sliderLength) {
      currentIndex = 0;
    }
    // buttonsList.children[currentIndex].classList.add("")
  }
  let id = setInterval(changeBackground, 1000);
  buttons.forEach((button, index, list) => {
    button.addEventListener("click", () => {
      list.forEach((element) => {
        if (element.classList.contains("white")) {
          element.classList.remove("white");
        }
      });
      button.classList.add("white");
      slider.style.backgroundImage = imageArray[index];
      clearInterval(id);
    });
  });
  /*
  let button1 = document.querySelector(".boton1");
  button1.addEventListener("click", () => {
    slider.style.backgroundImage = urlArray[0];
    button1.classList.add("white");
    button2.classList.remove("white");
    button3.classList.remove("white");
    button4.classList.remove("white");
    button5.classList.remove("white");
    button6.classList.remove("white");
  });
  let button2 = document.querySelector(".boton2");
  button2.addEventListener("click", () => {
    slider.style.backgroundImage = urlArray[1];
    button2.classList.add("white");
    button1.classList.remove("white");
    button3.classList.remove("white");
    button4.classList.remove("white");
    button5.classList.remove("white");
    button6.classList.remove("white");
  });
  let button3 = document.querySelector(".boton3");
  button3.addEventListener("click", () => {
    slider.style.backgroundImage = urlArray[2];
    button3.classList.add("white");
    button1.classList.remove("white");
    button2.classList.remove("white");
    button4.classList.remove("white");
    button5.classList.remove("white");
    button6.classList.remove("white");
  });
  let button4 = document.querySelector(".boton4");
  button4.addEventListener("click", () => {
    slider.style.backgroundImage = urlArray[3];
    button4.classList.add("white");
    button1.classList.remove("white");
    button3.classList.remove("white");
    button2.classList.remove("white");
    button5.classList.remove("white");
    button6.classList.remove("white");
  });
  let button5 = document.querySelector(".boton5");
  button5.addEventListener("click", () => {
    slider.style.backgroundImage = urlArray[4];
    button5.classList.add("white");
    button1.classList.remove("white");
    button3.classList.remove("white");
    button4.classList.remove("white");
    button2.classList.remove("white");
    button6.classList.remove("white");
  });
  let button6 = document.querySelector(".boton6");
  button6.addEventListener("click", () => {
    slider.style.backgroundImage = urlArray[5];
    button6.classList.add("white");
    button1.classList.remove("white");
    button3.classList.remove("white");
    button4.classList.remove("white");
    button5.classList.remove("white");
    button2.classList.remove("white");
  });*/
});
