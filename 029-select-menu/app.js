const selectField = document.getElementById('selectField');
const selectText = document.getElementById('selectText');
const list = document.getElementById('list');
const arrowIcon = document.getElementById('arrowIcon');
const options = document.getElementsByClassName('options');

selectField.addEventListener('click', () => {
  list.classList.toggle('hide');
  arrowIcon.classList.toggle('rotate');
});

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
  };
}
