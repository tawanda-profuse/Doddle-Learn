// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');

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
var circlepoints = document.querySelectorAll(".circle-point");
var angleLines = document.querySelector(".red-angle-lines");
var diagonalLine = document.querySelector(".diagonal-line");
var vector = document.querySelector("svg").getBoundingClientRect();
var area = document.querySelector("svg");
var text = document.querySelectorAll(".text");
var redCircles = document.querySelectorAll(".red-circle");

let mouseTracking = {
  circle1: false,
  circle2: false,
};

let angleCoordinates = {
  M1: { x: 258, y: 70 },
  L1: { x: 338, y: 70 },
  M2: { x: 338, y: 130 },
  M3: { x: 258, y: 130 },
  L2: { x: 258, y: 70 },
};

let diagonalCoordinates = {
  M: { x: 38, y: 294 },
  L: { x: 408, y: 13 },
};

// Event Listeners
circlepoints[0].addEventListener("mousedown", function () {
  mouseTracking.circle1 = true;
});

circlepoints[1].addEventListener("mousedown", function () {
  mouseTracking.circle2 = true;
});

document.addEventListener("mousemove", function (ev) {
  // Left circle
  if (mouseTracking.circle1 === true) {
    text[1].textContent = Math.floor(Math.atan2(ev.x, ev.y) * 2.5);
    text[3].textContent = Math.floor((ev.x / 2) / 100);
    text[4].textContent = text[2].textContent - text[1].textContent;
    text[5].textContent = text[2].textContent - text[3].textContent;
    circlepoints[0].setAttribute("cx", Math.floor(ev.x / 2.6));
    circlepoints[0].setAttribute("cy", Math.floor(ev.y / 1.8));
    angleCoordinates.L1.x = Math.floor(vector.height - ev.x / 4);
    angleCoordinates.M1.y = Math.floor(vector.x - ev.y / 2);
    angleCoordinates.L1.y = Math.floor(vector.x - ev.y / 2);
    angleCoordinates.L2.y = Math.floor(vector.x - ev.y / 2);
    angleLines.setAttribute(
      "d",
      `M ${angleCoordinates.M1.x} ${angleCoordinates.M1.y} L ${angleCoordinates.L1.x} ${angleCoordinates.L1.y} M ${angleCoordinates.M2.x} ${angleCoordinates.M2.y} M ${angleCoordinates.M3.x} ${angleCoordinates.M3.y} L ${angleCoordinates.L2.x} ${angleCoordinates.L2.y}`
    );
    diagonalCoordinates.M.x = Math.floor(ev.x / 20);
    diagonalCoordinates.M.y = Math.floor(ev.y);
    diagonalLine.setAttribute("d", `M ${diagonalCoordinates.M.x} ${diagonalCoordinates.M.y} L ${diagonalCoordinates.L.x} ${diagonalCoordinates.L.y}`);
  }
  // Top circle
  if (mouseTracking.circle2 === true) {
    text[0].textContent = Math.floor(Math.atan2(ev.x, ev.y) * 4);
    text[1].textContent = Math.floor(Math.atan2(ev.x, ev.y) * 2.5);
    text[2].textContent = Math.floor((ev.x / 2.3) / 100);
    text[4].textContent = text[2].textContent - text[1].textContent;
    text[5].textContent = text[2].textContent - text[3].textContent;
    circlepoints[1].setAttribute("cx", Math.floor(ev.x / 2.3));
    circlepoints[1].setAttribute("cy", Math.floor(ev.y / 1.7));
    angleCoordinates.M3.y = Math.floor(vector.x - ev.y / 1.6);
    angleCoordinates.M1.x = Math.floor(vector.height - ev.x / 3);
    angleCoordinates.M3.x = Math.floor(vector.height - ev.x / 3);
    angleCoordinates.L2.x = Math.floor(vector.height - ev.x / 3);
    angleLines.setAttribute(
      "d",
      `M ${angleCoordinates.M1.x} ${angleCoordinates.M1.y} L ${angleCoordinates.L1.x} ${angleCoordinates.L1.y} M ${angleCoordinates.M2.x} ${angleCoordinates.M2.y} M ${angleCoordinates.M3.x} ${angleCoordinates.M3.y} L ${angleCoordinates.L2.x} ${angleCoordinates.L2.y}`
    );
    diagonalCoordinates.L.x = Math.floor(ev.x / 2);
    diagonalCoordinates.L.y = Math.floor(ev.y / 1.8);
    diagonalLine.setAttribute("d", `M ${diagonalCoordinates.M.x} ${diagonalCoordinates.M.y} L ${diagonalCoordinates.L.x} ${diagonalCoordinates.L.y}`);
  }
});

document.addEventListener("mouseup", function () {
  mouseTracking.circle1 = false;
  mouseTracking.circle2 = false;
});
