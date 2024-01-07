const toggler = document.getElementById('switch');

toggler.addEventListener('click', () => {
  const bgColor = toggler.checked ? 'black' : 'white';

  document.body.style.backgroundColor = bgColor;
});
