const apiKey = '0acc098a64b3bd77fd4981e796d05c10';

const url = `https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=${apiKey}&units=imperial`;

fetch(url)
  .then(function (responseObj) {
    return responseObj.json();
  })
  .then(function (data) {
    const html = `
    <h2>Temp ${data.main.temp}</h2>
    `;
    const outputDiv = document.querySelector('.output');

    outputDiv.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });



// fetch(url)
//   .then(function (responseObj) {
//     const data = responseObj.json();

//     dataPromise.then(function (data) {
//       console.log(data);
//     });
//   })
//   .then(function () {
//     console.log('two')
//   })
//   .then(function () {
//     console.log('three')
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// console.log('run this synchronos console log');