let count = 5;
const h1 = document.querySelector('h1');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#close-modal');


function endGame() {
    modal.classList.remove('hide');
}

const interval = setInterval(function () {
    count--;

    h1.textContent = 'Count:' + count;

    if (!count) {
        clearInterval(interval);
        endGame();
    }
}, 1 * 1000);

function closeMondal() {
    modal.classList.add('hide');
}

document.body.addEventListener('click', closeMondal);

modal.addEventListener('click', function (eventObj) {
    eventObj.stopPropagation();
});

