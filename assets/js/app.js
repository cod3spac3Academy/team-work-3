window.addEventListener("load", () => {
  let interval = null;
  let slideshow = document.querySelector(".slider");
  let buttonList = slideshow.querySelectorAll(
    " .slider .slide-todos-buttons div "
  );
  buttonList.forEach((button, index) => {
    button.addEventListener("click", () => {
      clearInterval(interval);
      slideshow.classList.add("fade-in");
      setTimeout(() => {
        if (slideshow.classList.contains("fade-in")) {
          slideshow.classList.remove("fade-in");
        }
      }, 500);
      buttonList.forEach((button) => {
        if (button.classList.contains("active")) {
          button.classList.remove("active");
        }
      });
      button.classList.add("active");
      slideshow.style.backgroundImage = `url('./img/slider/${index + 1}.jpg')`;
    });
  });

  //Creo una un array donde estaran todas las imagenes
  const imagePaths = [
    "./img/slider/1.jpg",
    "./img/slider/2.jpg",
    "./img/slider/3.jpg",
    "./img/slider/4.jpg",
    "./img/slider/5.jpg",
    "./img/slider/6.jpg",
  ];

  const autoSlide = (slideshow, buttonList) => {
    let index = 0;
    interval = setInterval(() => {
      slideshow.classList.add("fade-in");
      setTimeout(() => {
        if (slideshow.classList.contains("fade-in")) {
          slideshow.classList.remove("fade-in");
        }
      }, 500);
      index = (index + 1) % imagePaths.length;
      slideshow.style.backgroundImage = `url('${imagePaths[index]}')`;
      buttonList.forEach((button) => {
        if (button.classList.contains("active")) {
          button.classList.remove("active");
        }
      });
      buttonList[index].classList.add("active");
    }, 3000);
  };

  autoSlide(slideshow, buttonList);
});
