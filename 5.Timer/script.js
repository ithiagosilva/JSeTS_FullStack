let timerBox = document.querySelector('.timer-box');
let iniciar = document.querySelector('#iniciar');
let pausar = document.querySelector('#pausar');
let zerar = document.querySelector('#zerar');

let timerTag = document.createElement('h2');
timerTag.innerText = "00:00:00";
timerBox.insertBefore(timerTag, timerBox.childNodes[3])

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

let statusTimer;
iniciar.addEventListener("click", () => {
    statusTimer = setInterval(iniciarTimer, 1000)
});

pausar.addEventListener("click", () => {
    setTimeout(() => {
        clearInterval(statusTimer)
    });
});
zerar.addEventListener("click", () => {
    sec = 0;
    min = 0;
    hour = 0;
    timerTag.innerText = "00:00:00";
});







