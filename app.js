var min = 0;
var sec = 0;
var msec = 0;
var minHead = document.querySelector(".min");
var secHead = document.querySelector(".sec");
var msecHead = document.querySelector(".msec");
var start = document.querySelector(".start");
var set = document.querySelector(".set");
var minsInput = document.querySelector("#mins");
var table_set_time = document.querySelector(".table_set_time");
var watch = document.querySelector(".watch");
var interval;

function setTime() {
  min = minsInput.value;
  sec = 59;
  table_set_time.classList.add("none");
  watch.classList.remove("none");
  minHead.innerHTML = min;
  secHead.innerHTML = sec;
}

function timer() {
  msec++;
  msecHead.innerHTML = msec;
  if (msec >= 100) {
    sec--;
    secHead.innerHTML = sec;
    msec = 0;
  } else if (sec <= 0) {
    min--;
    minHead.innerHTML = min;
    sec = 59;
  } else if (min <= 0) {
    clearInterval(interval);
  }
}

function onWatch() {
  interval = setInterval(timer, 10);
  start.setAttribute("disabled", "disabled");
}

function pauseWatch() {
  clearInterval(interval);
  start.removeAttribute("disabled");
}

function resetWatch() {
  start.removeAttribute("disabled");
  min = 0;
  sec = 0;
  msec = 0;
  minHead.innerHTML = min;
  secHead.innerHTML = sec;
  msecHead.innerHTML = msec;
  clearInterval(interval);
}
