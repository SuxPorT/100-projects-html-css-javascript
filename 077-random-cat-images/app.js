const url = 'https://api.thecatapi.com/v1/images/search';
const section = document.querySelector('.container');
const button = document.querySelector('.btn');

button.addEventListener('click', getRandomCats);

const randomCatPhoto = (json) => {
  const photo = json[0].url;
  section.classList.add('cats');

  const image = document.createElement('img');
  image.src = photo;
  image.classList.add('random_cats');
  image.alt = photo;
  section.appendChild(image);
};

async function getRandomCats() {
  section.innerHTML = '';
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log('JSON:', json);

    return randomCatPhoto(json);
  } catch (e) {
    console.log('This is an error');
    console.log(e);
  }
}
