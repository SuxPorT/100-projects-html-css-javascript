const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <div class="key">
      ${event.key === " " ? "Sapce" : event.key}
      <small>Key</small>
    </div>

    <div class="key">
      ${event.keyCode}
      <small>Key code</small>
    </div>

    <div class="key">
      ${event.code}
      <small>Code</small>
    </div>
  `;
});
