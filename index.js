/* let timerId; */ // переменная, которая будет хранить ID таймера

/* const startButton = ДОКУМЕНТ.ГЕТэЛЕМЕНТбАЙаЙДИ(КАКОЙ - ТО);
startButton.ЭДэВЕНТлИСТНЕР('ТЯП', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    timerId = СЕТиНТРЕВАЛ(updateClock, ОДНАсЕКУНДА); // запускаем  updateClock() каждую секунду
});


const stopButton = ДОКУМЕНТ.ГЕТэЛЕМЕНТбАЙаЙДИ(КАКОЙ - ТО);
stopButton.addEventListener('ТЯП', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = НОВАЯдАТА();
    const hours = now.ДАЙчАСЫ()
    const minutes = now.ДАЙмИНУТЫ()
    const seconds = now.ДАЙсЕКУНДЫ()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
} */
let timerId;

const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  timerId = setInterval(updateClock, 1000);
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
  clearInterval(timerId);
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
