// const accordion = document.querySelectorAll(".content-container");

// accordion.forEach((element) => {
//   element.addEventListener("click", () => {
//     element.classList.toggle("active");
//   });
// });

//next proj

// Variables for buttons
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

//Variables for time values
let microSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

// leadingZeros
let leadingMicroSeconds = 0;
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for timerStatus and setInterval
let timerStatus = "stopped";
let timerInterval = null;

//variables for timer ID
let timer = document.getElementById("timer");

//Stopwatch function
function stopWatch() {
  microSeconds++;

  if (microSeconds / 100 === 1) {
    seconds++;
    microSeconds = 0;
  }
  if (seconds / 60 === 1) {
    minutes++;
    seconds = 0;
  }
  if (minutes / 60 === 1) {
    hours++;
    minutes = 0;
  }

  //for the leading zeros
  if (microSeconds < 10) {
    leadingMicroSeconds = "0" + microSeconds.toString();
  } else {
    leadingMicroSeconds = microSeconds;
  }
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displayTimer = document.querySelector("#timer");

  displayTimer.textContent =
    leadingHours +
    ":" +
    leadingMinutes +
    ":" +
    leadingSeconds +
    ":" +
    leadingMicroSeconds;
}

//play, pause timer

startStopBtn.addEventListener("click", () => {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 10);
    startStopBtn.innerHTML = `
    <i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    clearInterval(timerInterval);
    startStopBtn.innerHTML = `
    <i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

//reset timer
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  microSeconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.innerText = "00:00:00:00";
  startStopBtn.innerHTML = `
    <i class="fa-solid fa-play" id="play"></i>`;
});
