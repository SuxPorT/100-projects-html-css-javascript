const imageContainer = document.querySelector('.image-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let x = 0;

const rotate = () => {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
};

prevBtn.addEventListener('click', () => {
  x = x + 45;
  rotate();
});

nextBtn.addEventListener('click', () => {
  x = x - 45;
  rotate();
});
