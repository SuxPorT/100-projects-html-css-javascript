const result = document.querySelector('.result-btn');
const clear = document.querySelector('.clear-btn');
const container = document.querySelector('.results-container');

const clearResult = () => {
  container.innerHTML = '';
};

const decimal = () => {
  const decimal = document.getElementById('number').value;
  let tempDecimal;
  let rem = 0;
  let binary = 0;
  let place = 1;

  tempDecimal = decimal;

  while (tempDecimal > 0) {
    rem = tempDecimal % 2;
    binary = binary + rem * place;
    tempDecimal = parseInt(tempDecimal / 2);
    place = place * 10;
  }

  const h1 = document.createElement('h1');
  h1.innerHTML = `${binary}`;

  container.append(h1);
};

result.addEventListener('click', decimal);

clear.addEventListener('click', clearResult);
