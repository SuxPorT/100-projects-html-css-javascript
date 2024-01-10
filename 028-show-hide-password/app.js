const input = document.querySelector('input');
const eyeIcon = document.querySelector('#eye-icon');

eyeIcon.addEventListener('click', () => {
  input.type = input.type === 'password' ? 'text' : 'password';
});
