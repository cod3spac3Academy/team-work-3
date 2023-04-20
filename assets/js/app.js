window.addEventListener("load", () => {
  let slides = document.querySelector(".slider");
  let dots = document.querySelector(".dot-container");
  let interval = null;

  slideAuto(slides, dots, 6, interval);
  slideManual(slides, dots, 6, interval);
});

// Function to automatically change the slides
const slideAuto = (slides, dots, length, interval) => {
  let slideIndex = 1;
  slides.classList.add("fade"); // Add the "fade" class to the slides element
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

// Function to change the slide when a dot is clicked
const slideManual = (slides, dots, length, interval) => {
  let slideIndex = 1;
  // Add an event listener on each dot
  Array.from(dots.children).forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Remove the "active" class from all dots
      Array.from(dots.children).forEach((dot) => {
        dot.classList.remove("active");
      });
      // Add the "active" class to the clicked dot
      dot.classList.add("active");
      // Update the slide index and change the slide
      slideIndex = index + 1;
      slides.style.backgroundImage = `url('./img/slider/${slideIndex}.jpg')`;
      // Stop the automatic slider
      clearInterval(interval);
    });
  });
};
