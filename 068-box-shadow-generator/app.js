const sliders = document.querySelectorAll('input[type="range"]');
const colors = document.querySelectorAll('input[type="color"]');
const output = document.getElementById('css-code');
const btnCopy = document.getElementById('copy');

const createBox = () => {
  const X = sliders[0].value;
  const Y = sliders[1].value;
  const blurRadius = sliders[2].value;
  const spreadRadius = sliders[3].value;

  const shadowcolor = colors[0].value;
  const boxShadow = `${X}px ${Y}px ${blurRadius}px ${spreadRadius}px`;

  document.getElementById(
    'box'
  ).style.cssText = `box-shadow: ${boxShadow} ${shadowcolor}`;
  output.value = `box-shadow: ${boxShadow}`;
};

sliders.forEach((slider) => {
  slider.addEventListener('input', createBox);
});

colors.forEach((color) => {
  color.addEventListener('change', createBox);
});

btnCopy.addEventListener('click', () => {
  output.select();
  document.execCommand('copy');

  alert('Code Copied');
});

createBox();
