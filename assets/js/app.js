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
    slider.style.backgroundImage = imageArray[currentIndex];
    slider.classList.add("fadeIn");
    setTimeout(() => {
      slider.classList.remove("fadeIn");
    }, 500);
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
      currentIndex = 0;
    }
  }
  
  let id = setInterval(changeBackground, 1000); 
  
  buttons.forEach((button, index, list) => {
    button.addEventListener("click", () => {
      slider.classList.add("fadeIn");
      setTimeout(() => {
        slider.classList.remove("fadeIn");
      }, 500);
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

  //Juanmi's section
  const gameDivs = document.querySelectorAll("section.games .newGames");
  
  for (let i = 0; i < gameDivs.length; i++) {
    gameDivs[i].addEventListener("click", function () {
      window.location.href = gameDivs[i].dataset.link;
    });
  }
});
