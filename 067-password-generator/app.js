const genBtn = document.querySelector('.btn1');
const copyBtn = document.querySelector('.btn2');

const genPassword = () => {
  const chars =
    '0123456789abcdefghijklmnopqristuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const passwordLength = 7;
  let password = '';

  for (let i = 0; i <= passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById('password').value = password;
};

const copyPassword = () => {
  const copyText = document.getElementById('password');

  copyText.select();
  document.execCommand('copy');
};

genBtn.addEventListener('click', () => genPassword());
copyBtn.addEventListener('click', () => copyPassword());
