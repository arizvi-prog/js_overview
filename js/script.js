const charSelect = document.querySelector('#char-select');
const searchBtn = document.querySelector('#search-btn');


function getCharacters() {
  const baseUrl = 'https://swapi.dev/api/';
  const option = charSelect.value;
  const url = `${baseUrl}/${option}`;

  $.get(url)

  .then(function(data){
    const $outputDiv = $('.output');

    $outputDiv.empty();
  })

      data.results.forEach(function (char) {
        outputDiv.append(`
          <div>
          <h3>${char.name}</h3>
          <p>Birth Year : ${char.birth_year}</p>
          </div>
          `)
      })
    }

init();