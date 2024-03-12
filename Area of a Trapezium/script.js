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
var controlCircles = document.querySelectorAll(".control-circle");
var vector = document.querySelector("svg").getBoundingClientRect();
var item = document.querySelector("svg");
var text = document.querySelectorAll("text");
var rightAngleLine = document.querySelector(".right-angle-line");
var rightAngleSquare = document.querySelector(".right-angle-square");
var trapezoid = document.querySelector(".trapezoid");
var topDottedLine = document.querySelector(".top-dotted-line");
var bottomDottedLine = document.querySelector(".bottom-dotted-line");

let mouseTracking = {
  circle1: false,
  circle2: false,
  circle3: false,
  circle4: false,
  dottedLine1: false,
  dottedLine2: false,
};

// Event Listeners
controlCircles[0].addEventListener("mousedown", function () {
  mouseTracking.circle1 = true;
});
controlCircles[1].addEventListener("mousedown", function () {
  mouseTracking.circle2 = true;
});
controlCircles[2].addEventListener("mousedown", function () {
  mouseTracking.circle3 = true;
});
controlCircles[3].addEventListener("mousedown", function () {
  mouseTracking.circle4 = true;
});
topDottedLine.addEventListener("mousedown", function () {
  mouseTracking.dottedLine1 = true;
});
bottomDottedLine.addEventListener("mousedown", function () {
  mouseTracking.dottedLine2 = true;
});

var trapezoidSize = {
  M: { x: 432, y: 740 },
  L1: { x: 645.44, y: 202 },
  L2: { x: 855.56, y: 202 },
  L3: { x: 1069, y: 740 },
  "Z ": "Z",
};

var rightAngleLineSize = {
  M: { x: 643, y: 689 },
  L: { x: 641, y: 211 },
};

document.addEventListener("mousemove", function (ev) {
  // Top left point
  if (mouseTracking.circle1 === true) {
    text[0].textContent = `${Math.floor(
      (Number(controlCircles[1].getAttribute("cx")) -
        Number(controlCircles[0].getAttribute("cx"))) /
        100
    )} cm`;

    controlCircles[0].setAttribute("cx", ev.x + 100);
    rightAngleLineSize.M.x = ev.x + 100;
    rightAngleLineSize.L.x = ev.x + 100 - 2;
    rightAngleLine.setAttribute(
      "d",
      `M ${rightAngleLineSize.M.x} ${rightAngleLineSize.M.y} L ${rightAngleLineSize.L.x} ${rightAngleLineSize.L.y}`
    );
    rightAngleSquare.setAttribute("x", `${ev.x + 100}`);
    trapezoidSize.L1.x = ev.x + 100;
    trapezoid.setAttribute(
      "d",
      `M ${trapezoidSize.M.x} ${trapezoidSize.M.y} L ${trapezoidSize.L1.x} ${trapezoidSize.L1.y} L ${trapezoidSize.L2.x} ${trapezoidSize.L2.y} L ${trapezoidSize.L3.x} ${trapezoidSize.L3.y} Z`
    );
    text[0].setAttribute("x", ev.x + 200);
  }
  // Top right point
  if (mouseTracking.circle2 === true) {
    text[0].textContent = `${Math.floor(
      (Number(controlCircles[1].getAttribute("cx")) -
        Number(controlCircles[0].getAttribute("cx"))) /
        100
    )} cm`;
    controlCircles[1].setAttribute("cx", ev.x + 200);
    text[0].setAttribute("x", ev.x + 100);
    trapezoidSize.L2.x = ev.x + 200;
    trapezoid.setAttribute(
      "d",
      `M ${trapezoidSize.M.x} ${trapezoidSize.M.y} L ${trapezoidSize.L1.x} ${trapezoidSize.L1.y} L ${trapezoidSize.L2.x} ${trapezoidSize.L2.y} L ${trapezoidSize.L3.x} ${trapezoidSize.L3.y} Z`
    );
  }
  // Bottom right point
  if (mouseTracking.circle3 === true) {
    text[2].textContent = `${Math.floor(
      (Number(controlCircles[2].getAttribute("cx")) -
        Number(controlCircles[3].getAttribute("cx"))) /
        100
    )} cm`;
    controlCircles[2].setAttribute("cx", ev.x + 300);
    text[2].setAttribute("x", ev.x);
    trapezoidSize.L3.x = ev.x + 300;
    trapezoid.setAttribute(
      "d",
      `M ${trapezoidSize.M.x} ${trapezoidSize.M.y} L ${trapezoidSize.L1.x} ${trapezoidSize.L1.y} L ${trapezoidSize.L2.x} ${trapezoidSize.L2.y} L ${trapezoidSize.L3.x} ${trapezoidSize.L3.y} Z`
    );
  }
  // Bottom left point
  if (mouseTracking.circle4 === true) {
    text[2].textContent = `${Math.floor(
      (Number(controlCircles[2].getAttribute("cx")) -
        Number(controlCircles[3].getAttribute("cx"))) /
        100
    )} cm`;
    controlCircles[3].setAttribute("cx", ev.x);
    text[2].setAttribute("x", ev.x + 300);
    trapezoidSize.M.x = ev.x;
    trapezoid.setAttribute(
      "d",
      `M ${trapezoidSize.M.x} ${trapezoidSize.M.y} L ${trapezoidSize.L1.x} ${trapezoidSize.L1.y} L ${trapezoidSize.L2.x} ${trapezoidSize.L2.y} L ${trapezoidSize.L3.x} ${trapezoidSize.L3.y} Z`
    );
  }
  // Top orange dotted line
  if (mouseTracking.dottedLine1 === true) {
    text[1].textContent = `${Math.floor(
      (controlCircles[3].getAttribute("cy") -
        controlCircles[0].getAttribute("cy")) /
        100
    )} cm`;
    topDottedLine.setAttribute("d", `M 10 ${ev.y + 100} L 1556 ${ev.y + 100}`);
    controlCircles[0].setAttribute("cy", ev.y + 100);
    controlCircles[1].setAttribute("cy", ev.y + 100);
    trapezoidSize.L1.y = ev.y + 100;
    trapezoidSize.L2.y = ev.y + 100;
    trapezoid.setAttribute(
      "d",
      `M ${trapezoidSize.M.x} ${trapezoidSize.M.y} L ${trapezoidSize.L1.x} ${trapezoidSize.L1.y} L ${trapezoidSize.L2.x} ${trapezoidSize.L2.y} L ${trapezoidSize.L3.x} ${trapezoidSize.L3.y} Z`
    );
    rightAngleLineSize.L.y = ev.y + 100;
    rightAngleLine.setAttribute(
      "d",
      `M ${rightAngleLineSize.M.x} ${rightAngleLineSize.M.y} L ${rightAngleLineSize.L.x} ${rightAngleLineSize.L.y}`
    );
    text[0].setAttribute("y", ev.y + 80);
    text[1].setAttribute("y", ev.y + 200);
  }
  // Bottom orange dotted line
  if (mouseTracking.dottedLine2 === true) {
    text[1].textContent = `${Math.floor(
      (controlCircles[3].getAttribute("cy") -
        controlCircles[0].getAttribute("cy")) /
        100
    )} cm`;
    bottomDottedLine.setAttribute(
      "d",
      `M 10 ${ev.y + 250} L 1556 ${ev.y + 250}`
    );
    controlCircles[2].setAttribute("cy", ev.y + 250);
    controlCircles[3].setAttribute("cy", ev.y + 250);
    rightAngleLineSize.M.y = ev.y + 200;
    rightAngleLine.setAttribute(
      "d",
      `M ${rightAngleLineSize.M.x} ${rightAngleLineSize.M.y} L ${rightAngleLineSize.L.x} ${rightAngleLineSize.L.y}`
    );
    rightAngleSquare.setAttribute("y", ev.y + 200);
    trapezoidSize.M.y = ev.y + 250;
    trapezoidSize.L3.y = ev.y + 250;
    trapezoid.setAttribute(
      "d",
      `M ${trapezoidSize.M.x} ${trapezoidSize.M.y} L ${trapezoidSize.L1.x} ${trapezoidSize.L1.y} L ${trapezoidSize.L2.x} ${trapezoidSize.L2.y} L ${trapezoidSize.L3.x} ${trapezoidSize.L3.y} Z`
    );
    text[1].setAttribute("y", ev.y + 200);
    text[2].setAttribute("y", ev.y + 310);
  }
});

document.addEventListener("mouseup", function () {
  mouseTracking.circle1 = false;
  mouseTracking.circle2 = false;
  mouseTracking.circle3 = false;
  mouseTracking.circle4 = false;
  mouseTracking.dottedLine1 = false;
  mouseTracking.dottedLine2 = false;
});
