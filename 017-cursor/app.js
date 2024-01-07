const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (event) => {
  moveCursor(event.pageX, event.pageY);
});

const moveCursor = (pageX, pageY) => {
  cursor.style.left = pageX + 'px';
  cursor.style.top = pageY + 'px';
};
