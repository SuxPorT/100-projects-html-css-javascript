const link = document.querySelector('#link');

link.addEventListener('click', () => {
  fetch('./assets/Credits.txt')
    .then((res) => res.text())
    .then((text) => {
      const urlRegex = /(https?:\/\/[^\s]+)/;
      const match = text.match(urlRegex);
      const link = document.getElementById('link');
      link.href = match[0];
    })
    .catch((e) => console.log(e));
});
