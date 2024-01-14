const p = document.getElementById('p');
const input = document.getElementById('input');
const searchBtn = document.getElementById('searchBtn');

const findText = () => {
  const input = document.getElementById('input').value;

  if (input !== '') {
    let regExp = new RegExp(input, 'gi');
    p.innerHTML = p.textContent.replace(regExp, '<mark>$&</mark>');
  }
};

searchBtn.addEventListener('click', () => {
  findText();
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    findText();
  }
});
