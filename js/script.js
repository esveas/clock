const date = new Date(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds(),
  hourHTML = document.getElementsByClassName("hour")[0],
  minuteHTML = document.getElementsByClassName("minute")[0],
  secondHTML = document.getElementsByClassName("second")[0],
  digitalClock = document.getElementById("digitalClock");

digitalClock.innerHTML = date.toLocaleTimeString();

window.setInterval(function() {
  const digitalNow = new Date();
  digitalClock.innerHTML = digitalNow.toLocaleTimeString();
}, 1000);

stepTime();

function stepTime() {
  stepSecond();
  stepMinute();
  stepHour();
}

function stepSecond() {
  let rotateSecond = second * 6;
  secondHTML.style.transform = "rotate(" + rotateSecond + "deg)";
  secondHTML.style.webkitTransform = "rotate(" + rotateSecond + "deg)";
  let eachSecond = setInterval(function() {
    rotateSecond += 6;
    secondHTML.style.transform = "rotate(" + rotateSecond + "deg)";
    secondHTML.style.webkitTransform = "rotate(" + rotateSecond + "deg)";
  }, 1000);
}

function stepMinute() {
  let rotateMinute = minute * 6;
  minuteHTML.style.transform = "rotate(" + rotateMinute + "deg)";
  minuteHTML.style.webkitTransform = "rotate(" + rotateMinute + "deg)";
  setTimeout(function() {
    rotateMinute += 6;
    minuteHTML.style.transform = "rotate(" + rotateMinute + "deg)";
    minuteHTML.style.webkitTransform = "rotate(" + rotateMinute + "deg)";
    let eachMinute = setInterval(function() {
      rotateMinute += 6;
      minuteHTML.style.transform = "rotate(" + rotateMinute + "deg)";
      minuteHTML.style.webkitTransform = "rotate(" + rotateMinute + "deg)";
    }, 60000);
  }, (60 - second) * 1000);
}

function stepHour() {
  if (hour > 11) {
    hour -= 12;
  }
  let rotateHour = hour * 30;
  hourHTML.style.transform = "rotate(" + rotateHour + "deg)";
  hourHTML.style.webkitTransform = "rotate(" + rotateHour + "deg)";
  setTimeout(function() {
    rotateHour += 30;
    hourHTML.style.transform = "rotate(" + rotateHour + "deg)";
    hourHTML.style.webkitTransform = "rotate(" + rotateHour + "deg)";
    let eachHour = setInterval(function() {
      rotateHour += 30;
      hourHTML.style.transform = "rotate(" + rotateHour + "deg)";
      hourHTML.style.webkitTransform = "rotate(" + rotateHour + "deg)";
    }, 3600000);
  }, (60 - minute) * 60000);
}