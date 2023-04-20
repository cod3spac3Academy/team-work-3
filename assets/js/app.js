window.addEventListener("load", () => {
  let slides = document.querySelector(".slider");
  let dots = document.querySelector(".dot-container");
  let interval = null
  // const slideManual = () => {
  //   let slideIndex = 1;
  //   showSlides(slideIndex);
  //   function currentSlide(n) {
  //     showSlides((slideIndex = n));
  //   }
  //   function showSlides(n) {
  //     let i;
  //     let slides = document.querySelectorAll(".slideShow");
  //     if (n > slides.length) {
  //       slideIndex = 1;
  //     }
  //     if (n < 1) {
  //       slideIndex = slides.length;
  //     }
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //     }
  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].classList.remove("active");
  //     }
  //     slides[slideIndex - 1].style.display = "block";
  //     dots[slideIndex - 1].classList.add("active");
  //   }
  //   let dotElements = document.querySelectorAll(".dot");
  //   for (let i = 0; i < dotElements.length; i++) {
  //     dotElements[i].addEventListener("click", () => {
  //       currentSlide(i + 1);
  //     });
  //   }
  // };
  // slideManual();
  slideAuto(slides, dots, 6, interval);
});

// automatic Slider
const slideAuto = (slides, dots, length, interval) => {
  let slideIndex = 1;
  interval = setInterval(() => {
    slideIndex++;
    if (dots.children[slideIndex - 2].classList.contains("active")) {
      dots.children[slideIndex - 2].classList.remove("active");
      dots.children[slideIndex - 1].classList.add("active");
    }
    if (slideIndex > length) {
      slideIndex = 1;
    }
    slides.style.backgroundImage = `url('./img/slider/${slideIndex}.jpg')`;
  }, 2000);
};
