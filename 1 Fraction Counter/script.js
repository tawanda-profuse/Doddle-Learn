// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');
var helpButton = document.getElementById('helpButton');
var startPanel = document.getElementById('startPanel');

helpButton.addEventListener("mouseover", function () {
    var x = document.getElementById("help-text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})

helpButton.addEventListener("mouseout", function () {
    var x = document.getElementById("help-text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})

resetButton.addEventListener("click", function () {
    window.location.reload();
    // window.location.href = "";
    return false;
})

function check() {
    console.log('check initiated');
}

function solve() {
    console.log('solve initiated');
}
// Bespoke functions_____________________________________
var stepSize = document.getElementById('stepSize');
var showCover = document.getElementById('showCover');
var secondHand = document.querySelector('.sec_hand');
var face = document.querySelector(".clock_face");
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
var fraction; // Calculated value of numerator / denominator
var inputs = document.querySelector('.inputs');

// Hides the step size container
stepSize.addEventListener('click', function () {
  stepSize.classList.add('hide');
  inputs.style.display = 'block';
});

// Reveals the step size container
showCover.addEventListener('click', function () {
  stepSize.classList.remove('hide');
  inputs.style.display = 'none';
});

// Function below generates a random color every time the web page loads
window.addEventListener("load", function () {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  face.style.backgroundColor = randomColor;
});

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
  '0.6666666666666666': 240, // 2/3, 4/6, 6/9
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
  // '1.3333333333333333': 480, // 4/3, 8/6
  '0.8': 288, // 4/5, 8/10
  '0.5714285714285714': 205.714286, // 4/7
  '0.4444444444444444': 160, // 4/9
  '5': 1800, // 5/1
  '2.5': 900, // 5/2, 10/4
  '1.6666666666666665': 600,
  '1.25': 450, // 5/4, 10/8
  '0.8333333333333334': 300, // 5/6
  '0.7142857142857143': 257.14285714285717, // 5/7
  '0.625': 225, // 5/8
  '0.5555555555555556': 200, // 5/9
  '6': 2160, // 6/1
  '1.2': 432, // 6/5
  '0.8571428571428571': 308.57142857142856, // 6/7
  // '0.6666666666666666': 240, // 6/9
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

// The colors array is used to generate a random color
const colors = ["blue", "yellow", "red", "purple"];

var counter = 0; // A dynamic value used to rotate the needle

// The function below calls the checkFraction function below and displays the values for constant, numerator, and denominator
function displayFraction(_decimal) {
  var numArray
  if (_decimal.includes(".") == true) {
    // Fractions have a dot (.)
    divider.innerHTML = '<hr/>'; // fraction divider
    numArray = _decimal.split(".");
    constantNum.innerText = `${numArray[0]}`;
    checkFraction(numArray[0], numArray[1], constantNum, topNum, bottomNum, divider);
  } else {
    // Constants don't have a dot (.)
    divider.innerHTML = ''; // fraction divider
    constantNum.innerText = `${_decimal}`;
    console.log(constantNum.innerText);
    topNum.innerText = '';
    bottomNum.innerText = '';
  }
}

// The function below verifies a decimal number and outputs the fraction value in the DOM
function checkFraction(prev, num, single, first, second, splitter) {
  // Denominator of 2 & 4
  if (num == "25") {
    first.innerText = 1;
    second.innerText = 4;
  } else if (num == "5") {
    first.innerText = 1;
    second.innerText = 2;
  } else if (num == "75") {
    first.innerText = 3;
    second.innerText = 4;
  } else if (num == "3333333333333333" || num == '33333333333333' || num == '333333333333333' || num == '3333333333333335' || num == '333333333333332' || num == '333333333333331') {
    // Denominator of 3
    first.innerText = 1;
    second.innerText = 3;
  } else if (num == "6666666666666666" || num == '6666666666666665' || num == '666666666666667' || num == '666666666666666' || num == '666666666666665' || num == '666666666666664' || num == '666666666666663') {
    first.innerText = 2;
    second.innerText = 3;
  } else if(prev == '1' && num == '9999999999999998'){
    single.innerText = 2;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if(prev == '4' && num == '999999999999999'){
    single.innerText = 5;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if(prev == '5' && num == '999999999999998'){
    single.innerText = 6;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if(prev == '6' && num == '999999999999997'){
    single.innerText = 7;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if(prev == '7' && num == '9999999999999964'){
    single.innerText = 8;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if(prev == '8' && num == '999999999999998'){
    single.innerText = 9;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if(num == '2' || num == '1999999999999997' || num == '2000000000000006' || num == '200000000000001' || num == '200000000000002' || num == '200000000000003' || num == '200000000000004'){
    // Denominator of 5
    first.innerText = '1';
    second.innerText = '5'
  } else if(num == '4' || num == '400000000000001' || num == '400000000000002' || num == '400000000000003' || num == '400000000000004' || num == '399999999999999'){
    first.innerText = 2;
    second.innerText = 5;
  } else if(num == '6000000000000001' || num == '5999999999999999' || num == '6' || num == '600000000000001' || num == '600000000000002' || num == '600000000000003' || num == '600000000000004' || num == '599999999999998'){
    first.innerText = 3;
    second.innerText = 5;
  } else if(num == '8' || num == '7999999999999998' || num == '8000000000000003' || num == '800000000000001' || num == '800000000000002' || num == '8000000000000025' || num == '800000000000003' || num == '800000000000004' || num == '799999999999997'){
    first.innerText = 4;
    second.innerText = 5;
  } else if(prev == '3' && num == '0000000000000004'){
    single.innerText = 3;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if(prev == '4' && num == '000000000000001'){
    single.innerText = 4;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if(prev == '5' && num == '000000000000002'){
    single.innerText = 5;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if(prev == '6' && num == '000000000000003'){
    single.innerText = 6;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if(prev == '7' && num == '0000000000000036'){
    single.innerText = 7;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if (prev == '8' && num == '000000000000004'){
    single.innerText = 8;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  } else if (prev == '9' && num == '999999999999996'){
    single.innerText = 10;
    first.innerText = '';
    second.innerText = '';
    splitter.innerText = '';
  }
}

// This function will activate the clockwise rotation of the needle
function rotateArmClockwise(rotationObject) {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  fraction = eval(stepSizeNumerator.innerText / stepSizeDenominator.innerText);
  counter += fraction;
  console.log("Fraction: " + fraction + " Counter: " + counter + " Degrees(360): " + Math.ceil((counter * 360)));
  if (rotationObject.hasOwnProperty(fraction)) {
    face.style.backgroundColor = randomColor;
    secondHand.animate([
      { transform: `rotate(${counter * 360}deg)` }
    ], {
      duration: 1000,
      easing: 'linear',
      iterations: 1,
      direction: 'normal',
      fill: 'both'
    });
    displayFraction(counter.toString());
  } else {
    console.log("False");
  }
}

// This function will activate the anti-clockwise rotation of the needle
function rotateArmAntiClockwise(rotationObject) {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  fraction = eval(stepSizeNumerator.innerText / stepSizeDenominator.innerText);
  counter -= fraction;
  console.log("Fraction: " + fraction + " Counter: " + counter + " Degrees(360): " + Math.ceil((counter * 360)));
  if (rotationObject.hasOwnProperty(fraction)) {
    face.style.backgroundColor = randomColor;
    secondHand.animate([
      { transform: `rotate(${counter * 360}deg)` }
    ], {
      duration: 1000,
      easing: 'linear',
      iterations: 1,
      direction: 'normal',
      fill: 'both'
    });
    displayFraction(counter.toString());
  } else {
    console.log("False");
  }
}

// Event listener for clockwise rotation
clockWise.addEventListener("click", function () {
  rotateArmClockwise(rotation);
});

// Event listener for anti-clockwise rotation
antiClockWise.addEventListener("click", function () {
  rotateArmAntiClockwise(rotation);
});



