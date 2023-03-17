var stepSize = document.getElementById('stepSize');
var showCover = document.getElementById('showCover');
var secondHand = document.querySelector('.sec_hand');
var face = document.querySelector(".clock_face");
var hourHand = document.querySelector(".hour_hand");
var minHand = document.querySelector(".min_hand");
var bg = document.querySelector("body");
var center = document.querySelector(".center");
var rim = document.querySelector(".clock_face");
var addNumerator = document.getElementById("addN"); // Addition icon for numerator
var minusNumerator = document.getElementById("minusN"); // Subtraction icon for numerator
var stepSizeNumerator = document.getElementById("numeratorI"); // Displayed value of numerator
var addDenominator = document.getElementById("addD"); // Addition icon for numerator
var minusDenominator = document.getElementById("minusD"); // Subtraction icon for numerator
var stepSizeDenominator = document.getElementById("denominatorI"); // Displayed value of denominator

// Hides the step size container
stepSize.addEventListener('click', function () {
  stepSize.classList.add('hide');
});

// Reveals the step size container
showCover.addEventListener('click', function () {
  stepSize.classList.remove('hide');
});

function displayDigits() {
  var number = 1;
  var number2 = 2;

  // Increases the value of the numerator step size
  addNumerator.addEventListener("click", function () {
    if (number < 10) {
      number++;
      stepSizeNumerator.innerText = number;
    } else {
      number = 0;
      stepSizeNumerator.innerText = number;
    }
  });

  // Decreases the value of the numerator step size
  minusNumerator.addEventListener("click", function () {
    if (number < 1) {
      number = 10
      stepSizeNumerator.innerText = number;
    } else {
      number--;
      stepSizeNumerator.innerText = number;
    }
  });

  // Increases the value of the denominator step size
  addDenominator.addEventListener("click", function () {
    if (number2 < 10) {
      number2++;
      stepSizeDenominator.innerText = number2;
    } else {
      number2 = 1;
      stepSizeDenominator.innerText = number2;
    }
  });

  // Decreases the value of the denominator step size
  minusDenominator.addEventListener("click", function () {
    if (number2 < 1) {
      number2 = 10
      stepSizeDenominator.innerText = number2;
    } else if (number2 > 0) {
      number2--;
      stepSizeDenominator.innerText = number2;
    } 
  });
}

displayDigits();

// Seconds hand
function second() {
  var now = new Date().getSeconds();

  const click = ((now / 60) * 360 + 90);
  secondHand.style.transform = "rotate(" + click + "deg)";
  // console.log(now);
  // console.log(click);
  var r = click - 344;
  var g = click - 222;
  var b = click - 4;
  if (r < 0, g < 0, b < 0) {
    var r = r + 155;
    var g = g + 255;
    var b = b + 355;
    // console.log(r, g, b);
  } else if (r > 255, g > 255, b > 255) {
    var r = r + 220;
    var g = g - 33;
    var b = b - 323;
    // console.log(r, g, b);
  }

  face.style.backgroundColor = `rgb(${r},${g},${b})`;

  if (now % 2 === 0) {
    center.style.border = "20px solid white";
    center.style.backgroundColor = "white";
    rim.style.border = "30px solid black";
    secondHand.style.backgroundColor = "black";
  } else if (now % 2 == !0) {
    center.style.border = "20px solid black";
    center.style.backgroundColor = "black";
    rim.style.backgroundColor = "30px solid white";
    secondHand.style.backgroundColor = "white";
  }
}

// Hour hand
function hour() {
  const now = new Date();
  const hours = now.getHours();
  const click = ((hours / 12) * 360 + 90);
  hourHand.style.transform = `rotate(${click}deg)`;
  // console.log(hours);
  // console.log(hours);
}

// Minute hand
function minute() {
  const now = new Date();
  const minutes = now.getMinutes();
  // console.log(minutes);
  const click = ((minute / 60) * 360 + 90);
  minHand.style.transform = `rotate(${click}deg)`;
  var ran = Math.round(Math.random());
  // console.log(click);
  if (minute % 2 === 0) {
    bg.style.backgroundColor = `rgb(${ran * 2},${minutes * 8},${minutes * 7})`;
    // test
    center.style.border = "20px solid white";
    center.style.backgroundColor = "white";
    rim.style.border = "30px solid black";
    // test
  } else if (minute % 2 == !0) {
    bg.style.backgroundColor = `rgb(${ran * 4},${minutes * 4},${minutes * 6})`;
    // test
    center.style.border = "20px solid black";
    center.style.backgroundColor = "black";
    rim.style.border = "30px solid white";
    // test
  }
}

setInterval(hour);
setInterval(second);
setInterval(minute);

