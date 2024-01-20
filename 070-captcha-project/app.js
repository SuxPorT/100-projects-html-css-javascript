let captcha = document.querySelector('.captcha');
let reloadBtn = document.querySelector('.reload-btn');
let inputField = document.querySelector('input');
let checkBtn = document.querySelector('.check-btn');
let statusTxt = document.querySelector('.status-text');

let allCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
];

const getCaptcha = () => {
  for (let i = 0; i < 6; i++) {
    const randomChar =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += `${randomChar}`;
  }
};

checkBtn.addEventListener('click', (e) => {
  e.preventDefault();

  statusTxt.style.display = 'block';

  const inputVal = inputField.value.split('').join('');
  if (inputVal == captcha.innerText) {
    statusTxt.style.color = '#4db2ec';
    statusTxt.innerText = 'Nice, captcha matched';

    setTimeout(() => {
      statusTxt.style.display = '';
      inputField.value = '';
      captcha.innerText = '';

      getCaptcha();
    }, 4000);
  } else {
    statusTxt.style.color = '#990000';
    statusTxt.innerText = 'Captcha not matched. Please Try Again Later';
  }
});

reloadBtn.addEventListener('click', () => {
  captcha.innerHTML = '';
  getCaptcha();
});
