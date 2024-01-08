const btn = document.getElementById('btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  const num1 = document.querySelector('.num1').value;
  const num2 = document.querySelector('.num2').value;
  const operator = document.getElementById('selectOp').value;

  switch (operator) {
    case "plus":
      result.innerHTML = Number(num1) + Number(num2);
      break;
    case "min":
      result.innerHTML = Number(num1) + Number(num2);
      break;
    case "div":
      result.innerHTML = Number(num1) / Number(num2);
      break;
    case "mult":
      result.innerHTML = Number(num1) * Number(num2);
      break;
    default:
      result.innerHTML = "Unknown operation";
      break;
  }
})

