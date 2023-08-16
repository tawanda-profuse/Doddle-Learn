// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
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
var number1Control = document.querySelector(".number-1-control");
var oneContainer = document.querySelector(".one-container");
var number2Control = document.querySelector(".number-2-control");
var twoContainer = document.querySelector(".two-container");
var number3Control = document.querySelector(".number-3-control");
var threeContainer = document.querySelector(".three-container");
var number4Control = document.querySelector(".number-4-control");
var fourContainer = document.querySelector(".four-container");
var dottedLine = document.querySelector(".dotted-line");
// Left shape
var leftShape = document.querySelector(".left-shape");
var ls_top_left = document.querySelector(".l-s-top-left");
var ls_bottom_right = document.querySelector(".l-s-bottom-right");
var ls_top_right = document.querySelector(".l-s-top-right");
var ls_bottom_left = document.querySelector(".l-s-bottom-left");
var ls_far_left = document.querySelector(".l-s-far-left");
var second_shape = document.querySelector(".second-shape");
// Right shape
var rightShape = document.querySelector(".right-shape");
var rsTopLeft = document.querySelector(".r-s-top-left");
var rsBottomLeft = document.querySelector(".r-s-bottom-left");
var rsBottomRight = document.querySelector(".r-s-bottom-right");
var rsFarRight = document.querySelector(".r-s-far-right");
var rsTopRight = document.querySelector(".r-s-top-right");

let mouseTracking = {
  lShape: false,
  lShapeTopLeft: false,
  lShapeBottomRight: false,
  lShapeTopRight: false,
  lShapeBottomLeft: false,
  lShapeFarLeft: false,
  rShape: false,
  rShapeTopLeft: false,
  rShapeBottomLeft: false,
  rShapeBottomRight: false,
  rShapeFarRight: false,
  rShapeTopRight: false
};

leftShapeCoordinates = {
  M: { x: 82.24, y: 235.76 },
  L1: { x: 178.5, y: 187 },
  L2: { x: 290, y: 187 },
  L3: { x: 240, y: 290 },
  L4: { x: 136.5, y: 290 },
};

let rightShapeCoordinates = {
  M: { x: 499.5, y: 241.5 },
  L1: { x: 605.13, y: 241.5 },
  L2: { x: 655.5, y: 292.5 },
  L3: { x: 605.13, y: 343.5 },
  L4: { x: 499.5, y: 343.5 },
};

// Event listeners
leftShape.addEventListener("mousedown", function(){
  mouseTracking.lShape = true;
});

rightShape.addEventListener("mousedown", function(){
  mouseTracking.rShape = true;
});

rsTopLeft.addEventListener("mousedown", function () {
  mouseTracking.rShapeTopLeft = true;
});

rsBottomLeft.addEventListener("mousedown", function () {
  mouseTracking.rShapeBottomLeft = true;
});

rsBottomRight.addEventListener("mousedown", function () {
  mouseTracking.rShapeBottomRight = true;
});

rsFarRight.addEventListener("mousedown", function () {
  mouseTracking.rShapeFarRight = true;
});

rsTopRight.addEventListener("mousedown", function () {
  mouseTracking.rShapeTopRight = true;
});

ls_top_left.addEventListener("mousedown", function () {
  mouseTracking.lShapeTopLeft = true;
});

ls_bottom_right.addEventListener("mousedown", function () {
  mouseTracking.lShapeBottomRight = true;
});

ls_top_right.addEventListener("mousedown", function () {
  mouseTracking.lShapeTopRight = true;
});

ls_bottom_left.addEventListener("mousedown", function () {
  mouseTracking.lShapeBottomLeft = true;
});

ls_far_left.addEventListener("mousedown", function () {
  mouseTracking.lShapeFarLeft = true;
});

document.addEventListener("mousemove", function (ev) {
  // Shape on the right
  if(mouseTracking.rShape === true){
    rsTopLeft.setAttribute("cx", ev.x / 1.6);
    rsTopLeft.setAttribute("cy", ev.y / 1.3);
    rsTopRight.setAttribute("cx", ev.x / 1.3);
    rsTopRight.setAttribute("cy", ev.y / 1.3);
    rsFarRight.setAttribute("cx", ev.x / 1.2);
    rsFarRight.setAttribute("cy", ev.y / 1);
    rsBottomRight.setAttribute("cx", ev.x / 1.3);
    rsBottomRight.setAttribute("cy", ev.y / 0.9);
    rsBottomLeft.setAttribute("cx", ev.x / 1.6);
    rsBottomLeft.setAttribute("cy", ev.y / 0.9);
    rightShapeCoordinates.M.x = ev.x / 1.6;
    rightShapeCoordinates.M.y = ev.y / 1.3;
    rightShapeCoordinates.L1.x = ev.x / 1.3;
    rightShapeCoordinates.L1.y = ev.y / 1.3;
    rightShapeCoordinates.L2.x = ev.x / 1.2;
    rightShapeCoordinates.L2.y = ev.y / 1;
    rightShapeCoordinates.L3.x = ev.x / 1.3;
    rightShapeCoordinates.L3.y = ev.y / 0.9;
    rightShapeCoordinates.L4.x = ev.x / 1.6;
    rightShapeCoordinates.L4.y = ev.y / 0.9;
    rightShape.setAttribute(
      "d",
      `M ${rightShapeCoordinates.M.x} ${rightShapeCoordinates.M.y} L ${rightShapeCoordinates.L1.x} ${rightShapeCoordinates.L1.y} L ${rightShapeCoordinates.L2.x} ${rightShapeCoordinates.L2.y} L ${rightShapeCoordinates.L3.x} ${rightShapeCoordinates.L3.y} L ${rightShapeCoordinates.L4.x} ${rightShapeCoordinates.L4.y} Z`
    );
  }
  // Right shape top left control point
  if (mouseTracking.rShapeTopLeft === true) {
    rsTopLeft.setAttribute("cx", ev.x / 1.5);
    rsTopLeft.setAttribute("cy", ev.y / 1.3);
    rightShapeCoordinates.M.x = ev.x / 1.5;
    rightShapeCoordinates.M.y = ev.y / 1.3;
    rightShape.setAttribute(
      "d",
      `M ${rightShapeCoordinates.M.x} ${rightShapeCoordinates.M.y} L ${rightShapeCoordinates.L1.x} ${rightShapeCoordinates.L1.y} L ${rightShapeCoordinates.L2.x} ${rightShapeCoordinates.L2.y} L ${rightShapeCoordinates.L3.x} ${rightShapeCoordinates.L3.y} L ${rightShapeCoordinates.L4.x} ${rightShapeCoordinates.L4.y} Z`
    );
  }
  // Right shape bottom left control point
  if (mouseTracking.rShapeBottomLeft === true) {
    rsBottomLeft.setAttribute("cx", ev.x / 1.5);
    rsBottomLeft.setAttribute("cy", ev.y / 1.2);
    rightShapeCoordinates.L4.x = ev.x / 1.5;
    rightShapeCoordinates.L4.y = ev.y / 1.2;
    rightShape.setAttribute(
      "d",
      `M ${rightShapeCoordinates.M.x} ${rightShapeCoordinates.M.y} L ${rightShapeCoordinates.L1.x} ${rightShapeCoordinates.L1.y} L ${rightShapeCoordinates.L2.x} ${rightShapeCoordinates.L2.y} L ${rightShapeCoordinates.L3.x} ${rightShapeCoordinates.L3.y} L ${rightShapeCoordinates.L4.x} ${rightShapeCoordinates.L4.y} Z`
    );
  }
  // Right shape bottom right control point
  if (mouseTracking.rShapeBottomRight === true) {
    rsBottomRight.setAttribute("cx", ev.x / 1.3);
    rsBottomRight.setAttribute("cy", ev.y / 1.2);
    rightShapeCoordinates.L3.x = ev.x / 1.3;
    rightShapeCoordinates.L3.y = ev.y / 1.2;
    rightShape.setAttribute(
      "d",
      `M ${rightShapeCoordinates.M.x} ${rightShapeCoordinates.M.y} L ${rightShapeCoordinates.L1.x} ${rightShapeCoordinates.L1.y} L ${rightShapeCoordinates.L2.x} ${rightShapeCoordinates.L2.y} L ${rightShapeCoordinates.L3.x} ${rightShapeCoordinates.L3.y} L ${rightShapeCoordinates.L4.x} ${rightShapeCoordinates.L4.y} Z`
    );
  }
  // Right shape far right control point
  if (mouseTracking.rShapeFarRight === true) {
    rsFarRight.setAttribute("cx", ev.x / 1.4);
    rsFarRight.setAttribute("cy", ev.y / 1.2);
    rightShapeCoordinates.L2.x = ev.x / 1.4;
    rightShapeCoordinates.L2.y = ev.y / 1.2;
    rightShape.setAttribute(
      "d",
      `M ${rightShapeCoordinates.M.x} ${rightShapeCoordinates.M.y} L ${rightShapeCoordinates.L1.x} ${rightShapeCoordinates.L1.y} L ${rightShapeCoordinates.L2.x} ${rightShapeCoordinates.L2.y} L ${rightShapeCoordinates.L3.x} ${rightShapeCoordinates.L3.y} L ${rightShapeCoordinates.L4.x} ${rightShapeCoordinates.L4.y} Z`
    );
  }
  // Right shape far right control point
  if (mouseTracking.rShapeTopRight === true) {
    rsTopRight.setAttribute("cx", ev.x / 1.4);
    rsTopRight.setAttribute("cy", ev.y / 1.2);
    rightShapeCoordinates.L1.x = ev.x / 1.4;
    rightShapeCoordinates.L1.y = ev.y / 1.2;
    rightShape.setAttribute(
      "d",
      `M ${rightShapeCoordinates.M.x} ${rightShapeCoordinates.M.y} L ${rightShapeCoordinates.L1.x} ${rightShapeCoordinates.L1.y} L ${rightShapeCoordinates.L2.x} ${rightShapeCoordinates.L2.y} L ${rightShapeCoordinates.L3.x} ${rightShapeCoordinates.L3.y} L ${rightShapeCoordinates.L4.x} ${rightShapeCoordinates.L4.y} Z`
    );
  }
  // Shape on the left
  if(mouseTracking.lShape === true){
    ls_top_left.setAttribute("cx", ev.x / 2.4);
    ls_top_left.setAttribute("cy", ev.y / 1.8);
    ls_top_right.setAttribute("cx", ev.x / 1.5)
    ls_top_right.setAttribute("cy", ev.y / 1.8);
    ls_bottom_right.setAttribute("cx", ev.x / 1.8)
    ls_bottom_right.setAttribute("cy", ev.y / 1.1);
    ls_bottom_left.setAttribute("cx", ev.x / 3)
    ls_bottom_left.setAttribute("cy", ev.y / 1.1);
    ls_far_left.setAttribute("cx", ev.x / 4.5);
    ls_far_left.setAttribute("cy", ev.y / 1.4);
    leftShapeCoordinates.M.x = ev.x / 4.5;
    leftShapeCoordinates.M.y = ev.y / 1.4;
    leftShapeCoordinates.L1.x = ev.x / 2.4;
    leftShapeCoordinates.L1.y = ev.y / 1.8;
    leftShapeCoordinates.L2.x = ev.x / 1.5;
    leftShapeCoordinates.L2.y = ev.y / 1.8;
    leftShapeCoordinates.L3.x = ev.x / 1.8;
    leftShapeCoordinates.L3.y = ev.y / 1.1;
    leftShapeCoordinates.L4.x = ev.x / 3;
    leftShapeCoordinates.L4.y = ev.y / 1.1;
    leftShape.setAttribute(
      "d",
      `M ${leftShapeCoordinates.M.x} ${leftShapeCoordinates.M.y} ${leftShapeCoordinates.L1.x} ${leftShapeCoordinates.L1.y} ${leftShapeCoordinates.L2.x} ${leftShapeCoordinates.L2.y} ${leftShapeCoordinates.L3.x} ${leftShapeCoordinates.L3.y} ${leftShapeCoordinates.L4.x} ${leftShapeCoordinates.L4.y} Z`
    );
  }
  //  Left shape top left control point
  if (mouseTracking.lShapeTopLeft === true) {
    ls_top_left.setAttribute("cx", ev.x / 2);
    ls_top_left.setAttribute("cy", ev.y / 1.5);
    leftShapeCoordinates.L1.x = ev.x / 2;
    leftShapeCoordinates.L1.y = ev.y / 1.5;
    leftShape.setAttribute(
      "d",
      `M ${leftShapeCoordinates.M.x} ${leftShapeCoordinates.M.y} ${leftShapeCoordinates.L1.x} ${leftShapeCoordinates.L1.y} ${leftShapeCoordinates.L2.x} ${leftShapeCoordinates.L2.y} ${leftShapeCoordinates.L3.x} ${leftShapeCoordinates.L3.y} ${leftShapeCoordinates.L4.x} ${leftShapeCoordinates.L4.y} Z`
    );
  }
  // Left shape bottom right control point
  if (mouseTracking.lShapeBottomRight === true) {
    ls_bottom_right.setAttribute("cx", ev.x / 1.8);
    ls_bottom_right.setAttribute("cy", ev.y);
    leftShapeCoordinates.L3.x = ev.x / 1.8;
    leftShapeCoordinates.L3.y = ev.y;
    leftShape.setAttribute(
      "d",
      `M ${leftShapeCoordinates.M.x} ${leftShapeCoordinates.M.y} ${leftShapeCoordinates.L1.x} ${leftShapeCoordinates.L1.y} ${leftShapeCoordinates.L2.x} ${leftShapeCoordinates.L2.y} ${leftShapeCoordinates.L3.x} ${leftShapeCoordinates.L3.y} ${leftShapeCoordinates.L4.x} ${leftShapeCoordinates.L4.y} Z`
    );
  }
  // Left shape top right control point
  if (mouseTracking.lShapeTopRight === true) {
    ls_top_right.setAttribute("cx", ev.x / 1.5);
    ls_top_right.setAttribute("cy", ev.y);
    leftShapeCoordinates.L2.x = ev.x / 1.5;
    leftShapeCoordinates.L2.y = ev.y;
    leftShape.setAttribute(
      "d",
      `M ${leftShapeCoordinates.M.x} ${leftShapeCoordinates.M.y} ${leftShapeCoordinates.L1.x} ${leftShapeCoordinates.L1.y} ${leftShapeCoordinates.L2.x} ${leftShapeCoordinates.L2.y} ${leftShapeCoordinates.L3.x} ${leftShapeCoordinates.L3.y} ${leftShapeCoordinates.L4.x} ${leftShapeCoordinates.L4.y} Z`
    );
  }
  // Left shape bottom left control point
  if (mouseTracking.lShapeBottomLeft === true) {
    ls_bottom_left.setAttribute("cx", ev.x / 2);
    ls_bottom_left.setAttribute("cy", ev.y);
    leftShapeCoordinates.L4.x = ev.x / 2;
    leftShapeCoordinates.L4.y = ev.y;
    leftShape.setAttribute(
      "d",
      `M ${leftShapeCoordinates.M.x} ${leftShapeCoordinates.M.y} ${leftShapeCoordinates.L1.x} ${leftShapeCoordinates.L1.y} ${leftShapeCoordinates.L2.x} ${leftShapeCoordinates.L2.y} ${leftShapeCoordinates.L3.x} ${leftShapeCoordinates.L3.y} ${leftShapeCoordinates.L4.x} ${leftShapeCoordinates.L4.y} Z`
    );
  }
  // Left shape far left control point
  if (mouseTracking.lShapeFarLeft === true) {
    ls_far_left.setAttribute("cx", ev.x / 2.5);
    ls_far_left.setAttribute("cy", ev.y);
    leftShapeCoordinates.M.x = ev.x / 2.5;
    leftShapeCoordinates.M.y = ev.y;
    leftShape.setAttribute(
      "d",
      `M ${leftShapeCoordinates.M.x} ${leftShapeCoordinates.M.y} ${leftShapeCoordinates.L1.x} ${leftShapeCoordinates.L1.y} ${leftShapeCoordinates.L2.x} ${leftShapeCoordinates.L2.y} ${leftShapeCoordinates.L3.x} ${leftShapeCoordinates.L3.y} ${leftShapeCoordinates.L4.x} ${leftShapeCoordinates.L4.y} Z`
    );
  }
});

document.addEventListener("mouseup", function () {
  mouseTracking.lShape = false;
  mouseTracking.lShapeTopLeft = false;
  mouseTracking.lShapeBottomRight = false;
  mouseTracking.lShapeTopRight = false;
  mouseTracking.lShapeBottomLeft = false;
  mouseTracking.lShapeFarLeft = false;
  mouseTracking.rShape = false;
  mouseTracking.rShapeTopLeft = false;
  mouseTracking.rShapeBottomLeft = false;
  mouseTracking.rShapeBottomRight = false;
  mouseTracking.rShapeFarRight = false;
  mouseTracking.rShapeTopRight = false;
});

number1Control.addEventListener("click", function () {
  oneContainer.style.stroke = "#ff0000";
  twoContainer.style.stroke = "#000080";
  threeContainer.style.stroke = "#000080";
  fourContainer.style.stroke = "#000080";
  dottedLine.setAttribute("d", "M 394.5 466.5 L 394.5 3");
});

number2Control.addEventListener("click", function () {
  oneContainer.style.stroke = "#000080";
  twoContainer.style.stroke = "#ff0000";
  threeContainer.style.stroke = "#000080";
  fourContainer.style.stroke = "#000080";
  dottedLine.setAttribute("d", "M 762 241.13 L 12 241.13");
});

number3Control.addEventListener("click", function () {
  oneContainer.style.stroke = "#000080";
  twoContainer.style.stroke = "#000080";
  threeContainer.style.stroke = "#ff0000";
  fourContainer.style.stroke = "#000080";
  dottedLine.setAttribute("d", "M 194.5 466.5 L 604.5 12");
});

number4Control.addEventListener("click", function () {
  oneContainer.style.stroke = "#000080";
  twoContainer.style.stroke = "#000080";
  threeContainer.style.stroke = "#000080";
  fourContainer.style.stroke = "#ff0000";
  dottedLine.setAttribute("d", "M 604.5 466.5 L 184.5 12");
});
