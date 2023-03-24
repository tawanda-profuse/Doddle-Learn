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
var constantNum = document.getElementById("constant");
var topNum = document.getElementById("numerator");
var divider = document.getElementById("divider");
var bottomNum = document.getElementById("denominator");
var fraction;

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

// Object used for fractional/decimal values in the rotation
const rotation = {
  '1': 360, // 1/1, 2/2, 3/3, 4/4, 5/5, 6/6, 7/7, 8/8, 9/9, 10/10
  '0.5': 180, // 1/2, 2/4, 3/6, 4/8, 5/10
  '0.3333333333333333': 120, // 1/3, 2/6, 3/9
  '0.25': 90, // 1/4, 2/8
  '0.2': 72, // 1/5, 2/10
  '0.16666666666666666': 60, // 1/6
  '0.14285714285714285': 51.4285714, // 1/7
  '0.125': 45, // 1/8
  '0.1111111111111111': 40, // 1/9
  '0.1': 36, // 1/10
  '2': 720, // 2/1, 4/2, 6/3, 8/4, 10/5
  '0.6666666666666666': 240, // 2/3, 4/6
  '0.4': 144, // 2/5, 4/10
  '0.2857142857142857': 102.857143, // 2/7
  '0.2222222222222222': 80, // 2/9
  '3': 1080, // 3/1, 6/2, 9/3
  '1.5': 540, // 3/2, 6/4, 9/6
  '0.75': 270, // 3/4, 6/8
  '0.6': 216, // 3/5, 6/10
  '0.42857142857142855': 154.285714, // 3/7
  '0.375': 135, // 3/8
  '0.3': 108, // 3/10
  '4': 1440, // 4/1, 8/2
  '1.3333333333333333': 480, // 4/3, 8/6
  '0.8': 288, // 4/5, 8/10
  '0.5714285714285714': 205.714286, // 4/7
  '0.4444444444444444': 160, // 4/9
  '5': 1800, // 5/1
  '2.5': 900, // 5/2, 10/4
  '1.6666666666666667': 600, // 5/3, 10/6
  '1.25': 450, // 5/4, 10/8
  '0.8333333333333334': 300, // 5/6
  '0.7142857142857143': 257.14285714285717, // 5/7
  '0.625': 225, // 5/8
  '0.5555555555555556': 200, // 5/9
  '6': 2160, // 6/1
  '1.2': 432, // 6/5
  '0.8571428571428571': 308.57142857142856, // 6/7
  '0.6666666666666666': 240, // 6/9
  '7': 2520, // 7/1
  '3.5': 1260, // 7/2
  '2.3333333333333335': 840, // 7/3
  '1.75': 630, // 7/4
  '1.4': 503.99999999999994, // 7/5
  '1.1666666666666667': 420, // 7/6
  '0.875': 315, // 7/8
  '0.7777777777777778': 280, // 7/9
  '0.7': 251.99999999999997, // 7/10
  '8': 2880, // 8/1
  '2.6666666666666665': 960, // 8/3
  '1.6': 576, // 8/5
  '1.1428571428571428': 411.4285714285714, // 8/7
  '0.8888888888888888': 320, // 8/9
  '9': 3240, // 9/1
  '4.5': 1620, // 9/2
  '2.25': 810, // 9/4
  '1.8': 648, // 9/5
  '1.2857142857142858': 462.8571428571429, // 9/7
  '1.125': 405, // 9/8
  '0.9': 324, // 9/10
  '10': 3600, // 10/1
  '3.3333333333333335': 1200, // 10/3
  '1.4285714285714286': 514.2857142857143, // 10/7
  '1.1111111111111112': 400, // 10/9
}

//colors: blue, yellow, red, purple

/* Consider applying 3 different animations/classes:
  1. onclick
  2. onmouseup
  3. other direction
*/

var currentState = '';

// https://gist.github.com/redteam-snippets/3934258

function displayFraction(_decimal){
  var numArray
  if(_decimal.includes(".") == true){
    divider.innerHTML = '<hr/>'; // fraction divider
    numArray = _decimal.split(".");
    if(numArray[0] > 0){
      constantNum.innerText = numArray[0];
      checkFrac(numArray[1], topNum, bottomNum)
    } else{
      constantNum.innerText = '';
      checkFrac(numArray[1], topNum, bottomNum)
    }
    
  } else {
    divider.innerHTML = ''; // fraction divider
    constantNum.innerText = _decimal;
  }
  console.log(numArray[0]);
}

function checkFrac(num, first, second) {
  if(num == "25"){
    first.innerText = 1;
    second.innerText = 4;
  } else if(num == "5"){
    first.innerText = 1;
    second.innerText = 2;
  } else if(num == "75"){
    first.innerText = 3;
    second.innerText = 4;
  }
}

function arithmetic(anyNum){
  var counter = 0;
  counter += anyNum;
}

function rotateArmClockwise(rotationObject) {
  fraction = eval(stepSizeNumerator.innerText / stepSizeDenominator.innerText);

  if (rotationObject.hasOwnProperty(fraction)) {
    arithmetic(fraction);
    secondHand.animate([
      { transform: `rotate(${rotationObject[fraction]}deg)`}
    ], {
      duration: 1000,
      easing: 'linear',
      iterations: 1,
      direction: 'normal',
      fill: 'both'
    });
    displayFraction(fraction.toString());
    // secondHand.style.transform = `rotate(${rotation[fraction]}deg)`;
    // secondHand.style.transition = 'transform 2s linear';
  } else {
    console.log("False");
  }
}

function rotateArmAntiClockwise(rotationObject) {
  fraction = eval(stepSizeNumerator.innerText / stepSizeDenominator.innerText);

  if (rotationObject.hasOwnProperty(fraction)) {
    secondHand.animate([
      { transform: `rotate(${-rotationObject[fraction]}deg)` }
    ], {
      duration: 1000,
      easing: 'linear',
      iterations: 1,
      direction: 'normal',
      fill: 'both'
    });
    displayFraction(fraction.toString());
  } else {
    console.log("False");
  }
}

clockWise.addEventListener("click", function () {
  rotateArmClockwise(rotation);
});

//Test
clockWise.addEventListener("mouseout", function () {
    
});

antiClockWise.addEventListener("click", function () {
  rotateArmAntiClockwise(rotation);
});



