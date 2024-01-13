const input = document.getElementById('inputBox');

const validate = () => {
  const form = document.querySelector('.mainForm');
  const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

  if (input.value.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
  } else {
    form.classList.add('invalid');
    form.classList.remove('valid');
  }
};

input.addEventListener('keydown', validate);
