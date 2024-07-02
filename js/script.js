const charSelect = document.querySelector('#char-select');
const searchBtn = document.querySelector('#search-btn');


function getCharacters() {
  const baseUrl = 'https://swapi.dev/api/';
  const option = charSelect.value;
  const url = `${baseUrl}/${option}`;

  console.log(url);

  fetch(url)
    .then(function (resObj) {
      return resObj.json();
    })
    .then(function (data) {
      const outputDiv = document.querySelector('.output');

      outputDiv.innerHTML = '';

      data.results.forEach(function (char) {
        outputDiv.insertAdjacentHTML('beforeend', `
          <div>
          <h3>${char.name}</h3>
          <p>Birth Year : ${char.birth_year}</p>
          </div>
          `)
      })
    })
    .then(function() {
      alert('Data has been retrieved!');
    })
}

function init() {
  searchBtn.addEventListener('click', getCharacters);
}

init();