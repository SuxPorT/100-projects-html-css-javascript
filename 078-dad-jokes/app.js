const url = "https://icanhazdadjoke.com";
const btn = document.getElementById('btn');
const content = document.getElementById("content");

const joke = async () => {
  const config = {
    headers: {
      Accept: "application/json"
    }
  };

  const data = await fetch(url, config);
  const json = await data.json();

  content.innerHTML = json.joke;
};

btn.addEventListener('click', joke);
