let timerId;
let isRunning = false;

const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  if (!isRunning) {
    timerId = setInterval(updateClock, 1000);
    isRunning = true;
  }
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
  clearInterval(timerId);
  isRunning = false;
});

function updateClock() {
  const clock = document.getElementById("clock");
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.textContent = hours + ":" + minutes + ":" + seconds;
}
