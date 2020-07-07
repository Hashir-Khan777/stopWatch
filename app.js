var min = 0;
var sec = 0;
var msec = 0;
var minHead = document.querySelector(".min");
var secHead = document.querySelector(".sec");
var msecHead = document.querySelector(".msec");
var start = document.querySelector(".start");
var interval;
function timer() {
  msec++;
  msecHead.innerHTML = msec;
  if (msec >= 100) {
    sec++;
    secHead.innerHTML = sec;
    msec = 0;
  } else if (sec >= 60) {
    min++;
    minHead.innerHTML = min;
    sec = 0;
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
  clearInterval(interval);
  start.removeAttribute("disabled");
  minHead.innerHTML = 0;
  secHead.innerHTML = 0;
  msecHead.innerHTML = 0;
}
