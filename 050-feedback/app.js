const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

const removeActives = () => {
  ratings.forEach((rating) => rating.classList.remove('active'));
};

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActives();
    e.target.parentNode.classList.add('active');

    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
        <p class='heart'>💖</p>
        <strong>Thank You! </strong>
        <br>
        <strong>Feedback: ${selectedRating} </strong>
    `;
});
