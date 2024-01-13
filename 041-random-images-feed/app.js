const container = document.querySelector('.content');
const baseURL = 'https://source.unsplash.com/all/';
const rows = 7;

const randomSize = () => {
  return `${randomNumber()}x${randomNumber()}`;
};

const randomNumber = () => {
  return Math.floor(Math.random() * 10) + 300;
};

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');

  img.src = `${baseURL}${randomSize()}`;
  container.appendChild(img);
}