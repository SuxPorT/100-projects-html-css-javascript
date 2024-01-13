const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ss = s >= 10 ? s : `0${s}`;

  const html = `
        <span>${h} :</span>
        <span>${m} :</span>
        <span>${ss}</span>
    `;
  clock.innerHTML = html;
};

clock.addEventListener('load', tick);

setInterval(tick, 1000);
