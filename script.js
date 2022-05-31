const newYear = "1 jan 2024";

const days = document.getElementById("days");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDat = new Date();

  const distance = (newYearDate - currentDat) / 1000;

  const day = Math.floor(distance / 3600 / 24);
  const hour = Math.floor(distance / 3600) % 24;
  const minute = Math.floor(distance / 60) % 60;
  const second = Math.floor(distance) % 60;

  days.innerHTML = day;
  hours.innerHTML = formatTime(hour);
  minutes.innerHTML = formatTime(minute);
  seconds.innerHTML = formatTime(second);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
