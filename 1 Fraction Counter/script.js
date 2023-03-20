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
var clockWise = document.getElementById("clockwise"); // Clockwise button
var antiClockWise = document.getElementById("anti-clockwise"); // Anti-clockwise button

// Hides the step size container
stepSize.addEventListener('click', function () {
  stepSize.classList.add('hide');
});

// Reveals the step size container
showCover.addEventListener('click', function () {
  stepSize.classList.remove('hide');
});

var number = 1;
var number2 = 2;

function displayDigits() {

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

function rotateArm() {
  console.log(number);
}

// Seconds hand
function second() {
  var now = new Date().getSeconds();

  const click = ((now / 60) * 360 + 90);
  secondHand.style.transform = "rotate(" + click + "deg)";
  console.log(now);
  // console.log(click);
}

// setInterval(hour);
// setInterval(second);
// setInterval(minute);

// setInterval(() => {
//   second();
// }, 1000);

