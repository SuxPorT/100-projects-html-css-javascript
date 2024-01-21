const displayJoke = document.getElementById('display-joke');
const button = document.getElementById('getJoke');

const onerror = () => {
  displayJoke.textContent = `Something went wrong :(`;
};

const getRandomJoke = () => {
  const ajax = new XMLHttpRequest();
  const url = 'https://api.chucknorris.io/jokes/random';

  ajax.open('GET', url, true);

  ajax.onreadystatechange = () => {
    if (ajax.status === 200 && ajax.readyState === 4) {
      const data = JSON.parse(ajax.responseText);
      displayJoke.innerHTML = `${data.value}`;
    } else {
      ajax.onerror = onerror();
    }
  };

  ajax.send();
};



button.addEventListener('click', getRandomJoke);
