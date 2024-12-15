let timerBox = document.querySelector('.timer-box');
let iniciar = document.querySelector('#iniciar');
let pausar = document.querySelector('#pausar');
let zerar = document.querySelector('#zerar');

let timerTag = document.createElement('h2');
timerTag.innerText = "00:00:00";
timerBox.insertBefore(timerTag, timerBox.childNodes[4])

function add0(i) {
    return i < 10 ? i = "0" + i: i;
}

let sec = 0;
let min = 0;
let hour = 0;
function iniciarTimer() {
    sec = sec + 1;
    if (sec > 59) {
        min = min + 1;
        sec = 0;
    } 
    
    if (min > 59) {
        hour = hour + 1;
        min = 0;
        sec = 0;
    }
    timerTag.innerText = `${add0(hour)}:${add0(min)}:${add0(sec)}`;
}
function pararTimer() {
    setTimeout(() => {
        clearInterval(statusTimer);
    });
}

let statusTimer;
let isItOn = false;
iniciar.addEventListener("click", () => {
    if (!isItOn) {
        statusTimer = setInterval(iniciarTimer, 1000)
    }
    isItOn = true;
    timerTag.style.backgroundImage = "linear-gradient(45deg, #453ff8, #22ffc8)";
});

pausar.addEventListener("click", () => {
    pararTimer();
    isItOn = false;
    timerTag.style.backgroundImage = "linear-gradient(45deg,rgb(248, 63, 85),rgb(255, 34, 203))";
});

zerar.addEventListener("click", () => {
    sec = 0;
    min = 0;
    hour = 0;
    timerTag.innerText = "00:00:00";
    pararTimer();
    isItOn = false;
    timerTag.style.backgroundImage = "linear-gradient(45deg,rgb(248, 63, 85),rgb(255, 34, 203))";
});
