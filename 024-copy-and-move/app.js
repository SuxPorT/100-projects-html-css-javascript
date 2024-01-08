const copyText = document.querySelector('textarea[name=copyTxt');
const finalText = document.querySelector('textarea[name=finalTxt');
const moveBtn = document.querySelector('.moveBtn');
const copyBtn = document.querySelector('.copyBtn');
const output = document.querySelector('.output');

const copyToClipboard = (str) => {
  const outputContainer = document.querySelector('.output-container');
  const textArea = document.createElement('textarea');

  textArea.value = str;
  outputContainer.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  outputContainer.removeChild(textArea);

  output.innerHTML = `<h3>Content copied</h3>`;
  output.classList.add('added');

  setTimeout(() => {
    output.classList.toggle('added');
    output.textContent = '';
  }, 2000);
};

copyBtn.addEventListener('click', () => {
  let temp = copyText.value;

  copyToClipboard(temp);
});

moveBtn.addEventListener('click', () => {
  let temp = copyText.value;

  finalText.value = temp;
});

// copyText.addEventListener('click', () => this.select());
// finalText.addEventListener('click', () => this.select());
