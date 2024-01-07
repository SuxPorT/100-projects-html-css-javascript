const btn = document.querySelector('.btn');
const closeIcon = document.querySelector('.close-icon');
const trailerContainer = document.querySelector('.trailer-container');
const video = document.querySelector('video');

const resetVideo = () => {
  trailerContainer.classList.add('active');
  video.pause();
  video.currentTime = 0;
};

btn.addEventListener('click', () => {
  trailerContainer.classList.remove('active');
});

closeIcon.addEventListener('click', () => {
  resetVideo();
});

document.addEventListener('keydown', (event) => {
  console.log(event);
  if (event.code === 'Escape' && !trailerContainer.classList.contains('active')) {
    resetVideo();
  }
});
