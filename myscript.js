let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const hrsDisplay = document.getElementById('hrs');
const minsDisplay = document.getElementById('mins');
const secsDisplay = document.getElementById('secs');

const startButton = document.querySelector('.startbtn');
const stopButton = document.querySelector('.stopbtn');
const resetButton = document.querySelector('.resetbtn');

function formatTime(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);

    hrsDisplay.textContent = String(hours).padStart(2, '0');
    minsDisplay.textContent = String(minutes).padStart(2, '0');
    secsDisplay.textContent = String(seconds).padStart(2, '0');
}

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    formatTime(0);
}

function updateTime() {
    const currentTime = Date.now();
    const time = currentTime - startTime;
    formatTime(time);
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
