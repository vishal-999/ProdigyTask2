// script.js
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let date = new Date(time);
  let hours = date.getUTCHours().toString().padStart(2, '0');
  let minutes = date.getUTCMinutes().toString().padStart(2, '0');
  let seconds = date.getUTCSeconds().toString().padStart(2, '0');
  let milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").textContent = timeToString(elapsedTime);
  }, 10);
}

function pauseStopwatch() {
  clearInterval(timerInterval);
}

function resetStopwatch() {
  clearInterval(timerInterval);
  document.getElementById("display").textContent = "00:00:00.000";
  elapsedTime = 0;
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  const lapTime = timeToString(elapsedTime);
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(lapItem);
}
