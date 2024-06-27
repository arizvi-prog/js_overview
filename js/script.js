const ul = document.querySelector('ul');
const output = document.querySelector('#output');


function doSomething(eventObj) {
  output.innerText = eventObj.target.innerText;
//   lis.forEach(function(li) {
//     li.style.background = '555';
//   });

  eventObj.target.style.background = 'red';
}


  ul.addEventListener('click', doSomething);

// const fruits = ['orange', 'apple', 'grape'];

// fruits.forEach(function (li) {
//     console.log(li);
// })