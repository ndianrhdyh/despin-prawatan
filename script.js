const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const slideCount = slideItems.length;
const slideWidth = 535 + 8; // width + margin
let index = 0;

// tampilkan slide pertama
slides.style.transform = `translateX(0)`;

function nextSlide() {
  index++;
  if (index >= slideCount) {
    index = 0;
  }

  slides.style.transition = "transform 0.6s ease-in-out";
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

setInterval(nextSlide, 3000);