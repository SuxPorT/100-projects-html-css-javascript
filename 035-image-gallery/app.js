let images = document.querySelectorAll('img');
let wrapper = document.getElementById('wrapper');
let imgWrapper = document.getElementById('fullImg');
let close = document.querySelector('span');

const openModal = (pic) => {
  wrapper.style.display = 'flex';
  imgWrapper.src = pic;
};

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    openModal(`assets/Img${index}.jpg`);
  });
});

close.addEventListener('click', () => (wrapper.style.display = 'none'));
