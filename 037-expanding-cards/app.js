const slides = document.querySelectorAll('.slide');

const removeCurrenctActives = () => {
  slides.forEach((slide) => [
    slide.classList.remove('active')
  ]);
};

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    removeCurrenctActives();
    slide.classList.add('active');
  });
});
