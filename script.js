let timer;
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let sal = document.querySelector(".sal");
let start = document.querySelector("#start");
let stop1 = document.querySelector("#stop");
let restart = document.querySelector("#restart");
let minuteText = parseInt(minute.innerText);
let secondText = parseInt(second.innerText);
let salText = parseInt(sal.innerText);
let clock = document.querySelector(".clock")

function updateClock() {
    salText++;
    if (salText > 99) {
        secondText++;
        salText = 0;
    }
    if (secondText > 59) {
        minuteText++;
        secondText = 0;
    }
    if (minuteText === 0 && secondText === 0 && salText === 0) {
        clearInterval(timer);
    }

    sal.innerText = salText < 10 ? '0' + salText : salText;
    second.innerText = secondText < 10 ? '0' + secondText : secondText;
    minute.innerText = minuteText < 10 ? '0' + minuteText : minuteText;
}

start.addEventListener('click', ()=> {
    timer = setInterval(updateClock, 10);
});

stop1.addEventListener('click', ()=> {
    clearInterval(timer);
});

restart.addEventListener('click', function() {
    minuteText = 0;
    secondText = 0;
    salText = 0;
    clearInterval(timer);
    minute.innerText = '00';
    second.innerText = '00';
    sal.innerText = '00';
    timer = setInterval(updateClock, 10);
});
