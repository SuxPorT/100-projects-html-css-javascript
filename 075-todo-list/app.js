const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('.output');
const message = document.querySelector('.message-container');

const getTodo = (value) => {
  const todo = document.createElement('div');
  const textEl = document.createElement('span');

  textEl.innerHTML = value;
  todo.appendChild(textEl);
  message.classList.toggle('success');
  message.textContent = 'Item added';

  setTimeout(() => {
    message.classList.toggle('success');
  }, 2000);

  const closeEl = document.createElement('span');
  closeEl.innerHTML = '&times;';
  closeEl.classList.add('delete');

  closeEl.addEventListener('click', () => {
    output.removeChild(todo);
    message.classList.toggle('error');
    message.textContent = 'Item deleted';

    setTimeout(() => {
      message.classList.toggle('error');
    }, 2000);
  });

  todo.appendChild(closeEl);
  todo.classList.add('todo');

  return todo;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = input.value;
  if (!value.trim()) return;

  output.appendChild(getTodo(value));
  input.value = '';
});
