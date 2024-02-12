// General_____________________________________________
var checkButton = document.getElementById("checkButton");
var solveButton = document.getElementById("solveButton");
var resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function () {
  window.location.reload();
  // window.location.href = ""
  return false;
});

function check() {
  console.log("check initiated");
}

function solve() {
  console.log("solve initiated");
}
// Bespoke functions_____________________________________
var dottedLine = document.getElementById("dotted-orange-line");
var controlPoints = document.querySelectorAll(".control-points");
var reflectionLines = document.querySelectorAll(".reflection-line");
var leftShape = document.getElementById("left-shape");
var rightShape = document.getElementById("right-shape");
var vector = document.querySelector("svg");

// Utility variables:
const mouseTracking = {
  orangeLine: false,
  point1: false,
  point2: false,
  point3: false,
  point4: false,
  point5: false,
};

let leftShapeCoordinates = {
  M: { x: 160.36, y: 470.84 },
  L1: { x: 371, y: 371 },
  L2: { x: 581, y: 371 },
  L3: { x: 481, y: 581 },
  L4: { x: 261, y: 581 },
  L5: { x: 160.36, y: 482.16 },
};
let rightShapeCoordinates = {
  M: { x: 1443, y: 477 },
  L1: { x: 1226, y: 371.5 },
  L2: { x: 1016, y: 371.5 },
  L3: { x: 1116, y: 581.5 },
  L4: { x: 1336, y: 581.4 },
  L5: { x: 1443, y: 477 },
};
orangeLineCoordinates = {
  M: { x: 798, y: 814 },
  L: { x: 798, y: 138 },
};
reflectionCoordinates = {
  1: {
    M: { x: 380, y: 372 },
    L: { x: 1228, y: 372 },
  },
  2: {
    M: { x: 590, y: 372 },
    L: { x: 1018, y: 372 },
  },
  3: {
    M: { x: 165, y: 475 },
    L: { x: 1439, y: 475 },
  },
  4: {
    M: { x: 273, y: 582 },
    L: { x: 1336, y: 582 },
  },
  5: {
    M: { x: 484, y: 582 },
    L: { x: 1115, y: 582 },
  },
};

// Event listeners:
dottedLine.addEventListener("mousedown", function () {
  mouseTracking.orangeLine = true;
});
controlPoints[0].addEventListener("mousedown", function () {
  mouseTracking.point1 = true;
});
controlPoints[1].addEventListener("mousedown", function () {
  mouseTracking.point2 = true;
});
controlPoints[2].addEventListener("mousedown", function () {
  mouseTracking.point3 = true;
});
controlPoints[3].addEventListener("mousedown", function () {
  mouseTracking.point4 = true;
});
controlPoints[4].addEventListener("mousedown", function () {
  mouseTracking.point5 = true;
});

document.addEventListener("mousemove", function (e) {
  // dotted orange line:
  if (mouseTracking.orangeLine === true) {
    orangeLineCoordinates.M.x = e.x;
    orangeLineCoordinates.L.x = e.x;
    dottedLine.setAttribute(
      "d",
      `M ${orangeLineCoordinates.M.x} ${orangeLineCoordinates.M.y} L ${orangeLineCoordinates.L.x} ${orangeLineCoordinates.L.y}`
    );
  }
  // top right point:
  if (mouseTracking.point1 === true) {
    controlPoints[0].setAttribute("cx", e.x);
    controlPoints[0].setAttribute("cy", e.y);
    leftShapeCoordinates.L2.x = e.x;
    leftShapeCoordinates.L2.y = e.y;
    rightShapeCoordinates.L2.x = vector.getBoundingClientRect().x * 5.15 - e.x;
    rightShapeCoordinates.L2.y = e.y;
    reflectionCoordinates[2].M.x = e.x;
    reflectionCoordinates[2].M.y = e.y;
    reflectionCoordinates[2].L.x =
      vector.getBoundingClientRect().x * 5.15 - e.x;
    reflectionCoordinates[2].L.y = e.y;
    reflectionLines[1].setAttribute(
      "d",
      `M ${reflectionCoordinates[2].M.x} ${reflectionCoordinates[2].M.y} L ${reflectionCoordinates[2].L.x} ${reflectionCoordinates[2].L.y}`
    );
    leftShape.setAttribute(
      "d",
      `M ${leftShapeCoordinates.M.x} ${leftShapeCoordinates.M.y} L ${leftShapeCoordinates.L1.x} ${leftShapeCoordinates.L1.y} L ${leftShapeCoordinates.L2.x} ${leftShapeCoordinates.L2.y} L ${leftShapeCoordinates.L3.x} ${leftShapeCoordinates.L3.y} L ${leftShapeCoordinates.L4.x} ${leftShapeCoordinates.L4.y} L ${leftShapeCoordinates.L5.x} ${leftShapeCoordinates.L5.y}`
    );
    rightShape.setAttribute(
      "d",
      `M ${rightShapeCoordinates.M.x} ${rightShapeCoordinates.M.y} L ${rightShapeCoordinates.L1.x} ${rightShapeCoordinates.L1.y} L ${rightShapeCoordinates.L2.x} ${rightShapeCoordinates.L2.y} L ${rightShapeCoordinates.L3.x} ${rightShapeCoordinates.L3.y} L ${rightShapeCoordinates.L4.x} ${rightShapeCoordinates.L4.y} L ${rightShapeCoordinates.L5.x} ${rightShapeCoordinates.L5.y}`
    );
  }
  // top left point:
  if (mouseTracking.point2 === true) {
    controlPoints[1].setAttribute("cx", e.x);
    controlPoints[1].setAttribute("cy", e.y);
    leftShapeCoordinates.L1.x = e.x;
    leftShapeCoordinates.L1.y = e.y;
    rightShapeCoordinates.L1.x = vector.getBoundingClientRect().x * 5.15 - e.x;
    rightShapeCoordinates.L1.y = e.y;
    reflectionCoordinates[1].M.x = e.x;
    reflectionCoordinates[1].M.y = e.y;
    reflectionCoordinates[1].L.x =
      vector.getBoundingClientRect().x * 5.15 - e.x;
    reflectionCoordinates[1].L.y = e.y;
    reflectionLines[0].setAttribute(
      "d",
      `M ${reflectionCoordinates[1].M.x} ${reflectionCoordinates[1].M.y} L ${reflectionCoordinates[1].L.x} ${reflectionCoordinates[1].L.y}`
    );
    leftShape.setAttribute(
      "d",
      `M ${leftShapeCoordinates.M.x} ${leftShapeCoordinates.M.y} L ${leftShapeCoordinates.L1.x} ${leftShapeCoordinates.L1.y} L ${leftShapeCoordinates.L2.x} ${leftShapeCoordinates.L2.y} L ${leftShapeCoordinates.L3.x} ${leftShapeCoordinates.L3.y} L ${leftShapeCoordinates.L4.x} ${leftShapeCoordinates.L4.y} L ${leftShapeCoordinates.L5.x} ${leftShapeCoordinates.L5.y}`
    );
    rightShape.setAttribute(
      "d",
      `M ${rightShapeCoordinates.M.x} ${rightShapeCoordinates.M.y} L ${rightShapeCoordinates.L1.x} ${rightShapeCoordinates.L1.y} L ${rightShapeCoordinates.L2.x} ${rightShapeCoordinates.L2.y} L ${rightShapeCoordinates.L3.x} ${rightShapeCoordinates.L3.y} L ${rightShapeCoordinates.L4.x} ${rightShapeCoordinates.L4.y} L ${rightShapeCoordinates.L5.x} ${rightShapeCoordinates.L5.y}`
    );
  }
  // far left point:
  if (mouseTracking.point3 === true) {
    controlPoints[2].setAttribute("cx", e.x);
    controlPoints[2].setAttribute("cy", e.y);
    leftShapeCoordinates.M.x = e.x;
    leftShapeCoordinates.L5.x = e.x;
    leftShapeCoordinates.M.y = e.y;
    leftShapeCoordinates.L5.y = e.y;
    rightShapeCoordinates.M.x = vector.getBoundingClientRect().x * 5.15 - e.x;
    rightShapeCoordinates.M.y = e.y;
    rightShapeCoordinates.L5.x = vector.getBoundingClientRect().x * 5.15 - e.x;
    rightShapeCoordinates.L5.y = e.y;
    reflectionCoordinates[3].M.x = e.x;
    reflectionCoordinates[3].M.y = e.y;
    reflectionCoordinates[3].L.x =
      vector.getBoundingClientRect().x * 5.15 - e.x;
    reflectionCoordinates[3].L.y = e.y;
    reflectionLines[2].setAttribute(
      "d",
      `M ${reflectionCoordinates[3].M.x} ${reflectionCoordinates[3].M.y} L ${reflectionCoordinates[3].L.x} ${reflectionCoordinates[3].L.y}`
    );
    leftShape.setAttribute(
      "d",
      `M ${leftShapeCoordinates.M.x} ${leftShapeCoordinates.M.y} L ${leftShapeCoordinates.L1.x} ${leftShapeCoordinates.L1.y} L ${leftShapeCoordinates.L2.x} ${leftShapeCoordinates.L2.y} L ${leftShapeCoordinates.L3.x} ${leftShapeCoordinates.L3.y} L ${leftShapeCoordinates.L4.x} ${leftShapeCoordinates.L4.y} L ${leftShapeCoordinates.L5.x} ${leftShapeCoordinates.L5.y}`
    );
    rightShape.setAttribute(
      "d",
      `M ${rightShapeCoordinates.M.x} ${rightShapeCoordinates.M.y} L ${rightShapeCoordinates.L1.x} ${rightShapeCoordinates.L1.y} L ${rightShapeCoordinates.L2.x} ${rightShapeCoordinates.L2.y} L ${rightShapeCoordinates.L3.x} ${rightShapeCoordinates.L3.y} L ${rightShapeCoordinates.L4.x} ${rightShapeCoordinates.L4.y} L ${rightShapeCoordinates.L5.x} ${rightShapeCoordinates.L5.y}`
    );
  }
  // bottom left point:
  if (mouseTracking.point4 === true) {
    controlPoints[3].setAttribute("cx", e.x / 0.8);
    controlPoints[3].setAttribute("cy", e.y / 0.8);
    reflectionCoordinates[4].M.x = e.x / 0.8;
    reflectionCoordinates[4].M.y = e.y / 0.8;
    reflectionCoordinates[4].L.x = vector.getBoundingClientRect().x * 5 - e.x;
    reflectionCoordinates[4].L.y = e.y / 0.8;
    reflectionLines[3].setAttribute(
      "d",
      `M ${reflectionCoordinates[4].M.x} ${reflectionCoordinates[4].M.y} L ${reflectionCoordinates[4].L.x} ${reflectionCoordinates[4].L.y}`
    );
    leftShapeCoordinates.L4.x = e.x / 0.8;
    leftShapeCoordinates.L4.y = e.y / 0.8;
    rightShapeCoordinates.L4.x = vector.getBoundingClientRect().x * 5 - e.x;
    rightShapeCoordinates.L4.y = e.y / 0.8;
    leftShape.setAttribute(
      "d",
      `M ${leftShapeCoordinates.M.x} ${leftShapeCoordinates.M.y} L ${leftShapeCoordinates.L1.x} ${leftShapeCoordinates.L1.y} L ${leftShapeCoordinates.L2.x} ${leftShapeCoordinates.L2.y} L ${leftShapeCoordinates.L3.x} ${leftShapeCoordinates.L3.y} L ${leftShapeCoordinates.L4.x} ${leftShapeCoordinates.L4.y} L ${leftShapeCoordinates.L5.x} ${leftShapeCoordinates.L5.y}`
    );
    rightShape.setAttribute(
      "d",
      `M ${rightShapeCoordinates.M.x} ${rightShapeCoordinates.M.y} L ${rightShapeCoordinates.L1.x} ${rightShapeCoordinates.L1.y} L ${rightShapeCoordinates.L2.x} ${rightShapeCoordinates.L2.y} L ${rightShapeCoordinates.L3.x} ${rightShapeCoordinates.L3.y} L ${rightShapeCoordinates.L4.x} ${rightShapeCoordinates.L4.y} L ${rightShapeCoordinates.L5.x} ${rightShapeCoordinates.L5.y}`
    );
  }
  // bottom right point:
  if (mouseTracking.point5 === true) {
    controlPoints[4].setAttribute("cx", e.x / 0.8);
    controlPoints[4].setAttribute("cy", e.y / 0.8);
    leftShapeCoordinates.L3.x = e.x / 0.8;
    leftShapeCoordinates.L3.y = e.y / 0.8;
    rightShapeCoordinates.L3.x = vector.getBoundingClientRect().x * 4.8 - e.x;
    rightShapeCoordinates.L3.y = e.y / 0.8;
    reflectionCoordinates[5].M.x = e.x / 0.8;
    reflectionCoordinates[5].M.y = e.y / 0.8;
    reflectionCoordinates[5].L.x = vector.getBoundingClientRect().x * 4.8 - e.x;
    reflectionCoordinates[5].L.y = e.y / 0.8;
    reflectionLines[4].setAttribute(
      "d",
      `M ${reflectionCoordinates[5].M.x} ${reflectionCoordinates[5].M.y} L ${reflectionCoordinates[5].L.x} ${reflectionCoordinates[5].L.y}`
    );
    leftShape.setAttribute(
      "d",
      `M ${leftShapeCoordinates.M.x} ${leftShapeCoordinates.M.y} L ${leftShapeCoordinates.L1.x} ${leftShapeCoordinates.L1.y} L ${leftShapeCoordinates.L2.x} ${leftShapeCoordinates.L2.y} L ${leftShapeCoordinates.L3.x} ${leftShapeCoordinates.L3.y} L ${leftShapeCoordinates.L4.x} ${leftShapeCoordinates.L4.y} L ${leftShapeCoordinates.L5.x} ${leftShapeCoordinates.L5.y}`
    );
    rightShape.setAttribute(
      "d",
      `M ${rightShapeCoordinates.M.x} ${rightShapeCoordinates.M.y} L ${rightShapeCoordinates.L1.x} ${rightShapeCoordinates.L1.y} L ${rightShapeCoordinates.L2.x} ${rightShapeCoordinates.L2.y} L ${rightShapeCoordinates.L3.x} ${rightShapeCoordinates.L3.y} L ${rightShapeCoordinates.L4.x} ${rightShapeCoordinates.L4.y} L ${rightShapeCoordinates.L5.x} ${rightShapeCoordinates.L5.y}`
    );
  }
});

document.addEventListener("mouseup", function () {
  mouseTracking.orangeLine = false;
  mouseTracking.point1 = false;
  mouseTracking.point2 = false;
  mouseTracking.point3 = false;
  mouseTracking.point4 = false;
  mouseTracking.point5 = false;
});
