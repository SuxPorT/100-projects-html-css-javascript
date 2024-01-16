const body = document.querySelector('body');

const eyeball = () => {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    const radian = Math.atan2(event.pageX - x, event.pageY - y);
    const rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotate}deg)`;
  });
};

body.addEventListener('mousemove', eyeball);
