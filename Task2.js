let startTime = 0;
let intervalId = null;
let isRunning = false;

function start() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - (startTime || 0);
        intervalId = setInterval(updateDisplay, 10);
    }
}

function pause() {
    isRunning = false;
    clearInterval(intervalId);
}

function reset() {
    isRunning = false;
    clearInterval(intervalId);
    startTime = 0;
    updateDisplay();
    clearLaps();
}

function lap() {
    if (isRunning) {
        const currentTime = Date.now() - startTime;
        const lapTime = formatTime(currentTime);
        const lapList = document.getElementById('laps');
        const listItem = document.createElement('li');
        listItem.textContent = lapTime;
        lapList.appendChild(listItem);
    }
}

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '00' : milliseconds < 100 ? '0' : ''}${milliseconds}`;
}

function clearLaps() {
    const lapList = document.getElementById('laps');
    lapList.innerHTML = '';
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    document.getElementById('minutes').textContent = formatTime(currentTime).split(':')[0];
    document.getElementById('seconds').textContent = formatTime(currentTime).split(':')[1];
    document.getElementById('milliseconds').textContent = formatTime(currentTime).split(':')[2];
}

reset();