const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.getElementById('up-btn');
const downButton = document.getElementById('down-btn');
const sliderLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

const nextSlide = (params) => {
  const sliderHeight = sliderContainer.clientHeight;

  if (params === 'down') {
    activeSlideIndex++;

    if (activeSlideIndex > sliderLength - 1)
      activeSlideIndex = 0;
  }

  if (params === 'up') {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;
    }
  }
  console.log(activeSlideIndex);

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};

upButton.addEventListener('click', () => nextSlide('up'));
downButton.addEventListener('click', () => nextSlide('down'));
