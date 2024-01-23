const body = document.body;
const theme = document.querySelector('.theme');
const followButtons = document.querySelectorAll('.follow-button');

body.className = 'light-theme';

const toggleTheme = () => {
  if (body.className === 'light-theme') {
    body.className = 'dark-theme';
    theme.innerText = 'Light';
  } else {
    body.className = 'light-theme';
    theme.innerText = 'Dark';
  }
};

const followUnFollow = (button) => {
  button.classList.toggle('followed');
  if (button.innerText == 'Follow') button.innerText = 'Unfollow';
  else button.innerText = 'Follow';
};

theme.addEventListener('click', toggleTheme);

followButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => followUnFollow(e.target));
});
