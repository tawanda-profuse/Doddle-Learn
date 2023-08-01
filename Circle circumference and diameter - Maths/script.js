// General_____________________________________________
var checkButton = document.getElementById("checkButton");
var solveButton = document.getElementById("solveButton");
var resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function () {
  window.location.reload();
  // window.location.href = "";
  return false;
});

function check() {
  console.log("check initiated");
}

function solve() {
  console.log("solve initiated");
}
// Bespoke functions_____________________________________
var radiusValue = document.querySelector(".radius-value");
var radiusImage = document.querySelector(".radius img");
var diameterValue = document.querySelector(".diameter-value");
var diameterImage = document.querySelector(".diameter img");
var circleSize = document.getElementById("circle-size");
var circle = document.querySelector(".circle");

// calculations
var radius = circleSize.value;
var diameter = (circleSize.value * Math.PI).toFixed(1);

circle.style.width = radius * 2 + "rem";
circle.style.height = radius * 2 + "rem";

circleSize.addEventListener("input", function () {
  circle.style.width = circleSize.value * 2 + "rem";
  circle.style.height = circleSize.value * 2 + "rem";
  radiusValue.textContent = circleSize.value;
  diameterValue.innerHTML = (circleSize.value * Math.PI).toFixed(1);
});

radiusImage.addEventListener("click", function () {
    radiusImage.style.display = 'none';
});

radiusValue.addEventListener("click", function () {
    radiusImage.style.display = 'block';
});

diameterImage.addEventListener("click", function () {
    diameterImage.style.display = 'none';
});

diameterValue.addEventListener("click", function () {
    diameterImage.style.display = 'block';
});
