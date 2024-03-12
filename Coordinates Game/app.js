// General_____________________________________________
var checkButton = document.getElementById("checkButton");
var solveButton = document.getElementById("solveButton");
var startButton = document.getElementById("startButton");
var resetButton = document.getElementById("resetButton");
var startPanel = document.getElementById("startPanel");

resetButton.addEventListener("click", function () {
  window.location.reload();
  return false;
});

function check() {
  console.log("check initiated");
}

function solve() {
  console.log("solve initiated");
}
// Bespoke functions_____________________________________
var redBall = document.querySelector("#red-ball");
var blueBall = document.querySelector("#blue-ball");
var grid = document.querySelector("#grid");
var redUpArrow1 = document.getElementById("red-up-arrow-1");
var redUpArrow2 = document.getElementById("red-up-arrow-2");
var redDownArrow1 = document.getElementById("red-down-arrow-1");
var redDownArrow2 = document.getElementById("red-down-arrow-2");
var blueUpArrow1 = document.getElementById("blue-up-arrow-1");
var blueUpArrow2 = document.getElementById("blue-up-arrow-2");
var blueDownArrow1 = document.getElementById("blue-down-arrow-1");
var blueDownArrow2 = document.getElementById("blue-down-arrow-2");
var redTextLeft = document.getElementById("red-text-left");
var redTextRight = document.getElementById("red-text-right");
var blueTextLeft = document.getElementById("blue-text-left");
var blueTextRight = document.getElementById("blue-text-right");
var Balls = document.querySelectorAll(".ball");
var allCoordinates = [];
var displayMessage = document.querySelector("#display-message");
var displayMessageText = document.querySelector("#display-message-text");

function checkInput(leftNode, rightNode, color) {
  // (-4, 4)
  if (leftNode.textContent === "-4" && rightNode.textContent === "4") {
    Balls[0].style.visibility = "visible";
    Balls[0].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-4, 3)
  if (leftNode.textContent === "-4" && rightNode.textContent === "3") {
    Balls[1].style.visibility = "visible";
    Balls[1].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-4, 2)
  if (leftNode.textContent === "-4" && rightNode.textContent === "2") {
    Balls[2].style.visibility = "visible";
    Balls[2].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-4, 1)
  if (leftNode.textContent === "-4" && rightNode.textContent === "1") {
    Balls[3].style.visibility = "visible";
    Balls[3].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-4, 0)
  if (leftNode.textContent === "-4" && rightNode.textContent === "0") {
    Balls[4].style.visibility = "visible";
    Balls[4].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-4, -1)
  if (leftNode.textContent === "-4" && rightNode.textContent === "-1") {
    Balls[5].style.visibility = "visible";
    Balls[5].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-4, -2)
  if (leftNode.textContent === "-4" && rightNode.textContent === "-2") {
    Balls[6].style.visibility = "visible";
    Balls[6].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-4, -3)
  if (leftNode.textContent === "-4" && rightNode.textContent === "-3") {
    Balls[7].style.visibility = "visible";
    Balls[7].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-4, -4)
  if (leftNode.textContent === "-4" && rightNode.textContent === "-4") {
    Balls[8].style.visibility = "visible";
    Balls[8].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-3, 4)
  if (leftNode.textContent === "-3" && rightNode.textContent === "4") {
    Balls[9].style.visibility = "visible";
    Balls[9].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-3, 3)
  if (leftNode.textContent === "-3" && rightNode.textContent === "3") {
    Balls[10].style.visibility = "visible";
    Balls[10].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-3, 2)
  if (leftNode.textContent === "-3" && rightNode.textContent === "2") {
    Balls[11].style.visibility = "visible";
    Balls[11].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-3, 1)
  if (leftNode.textContent === "-3" && rightNode.textContent === "1") {
    Balls[12].style.visibility = "visible";
    Balls[12].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-3, 0)
  if (leftNode.textContent === "-3" && rightNode.textContent === "0") {
    Balls[13].style.visibility = "visible";
    Balls[13].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-3, -1)
  if (leftNode.textContent === "-3" && rightNode.textContent === "-1") {
    Balls[14].style.visibility = "visible";
    Balls[14].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-3, -2)
  if (leftNode.textContent === "-3" && rightNode.textContent === "-2") {
    Balls[15].style.visibility = "visible";
    Balls[15].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-3, -3)
  if (leftNode.textContent === "-3" && rightNode.textContent === "-3") {
    Balls[16].style.visibility = "visible";
    Balls[16].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-3, -4)
  if (leftNode.textContent === "-3" && rightNode.textContent === "-4") {
    Balls[17].style.visibility = "visible";
    Balls[17].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-2, 4)
  if (leftNode.textContent === "-2" && rightNode.textContent === "4") {
    Balls[18].style.visibility = "visible";
    Balls[18].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-2, 3)
  if (leftNode.textContent === "-2" && rightNode.textContent === "3") {
    Balls[19].style.visibility = "visible";
    Balls[19].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-2, 2)
  if (leftNode.textContent === "-2" && rightNode.textContent === "2") {
    Balls[20].style.visibility = "visible";
    Balls[20].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-2, 1)
  if (leftNode.textContent === "-2" && rightNode.textContent === "1") {
    Balls[21].style.visibility = "visible";
    Balls[21].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-2, 0)
  if (leftNode.textContent === "-2" && rightNode.textContent === "0") {
    Balls[22].style.visibility = "visible";
    Balls[22].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-2, -1)
  if (leftNode.textContent === "-2" && rightNode.textContent === "-1") {
    Balls[23].style.visibility = "visible";
    Balls[23].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-2, -2)
  if (leftNode.textContent === "-2" && rightNode.textContent === "-2") {
    Balls[24].style.visibility = "visible";
    Balls[24].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-2, -3)
  if (leftNode.textContent === "-2" && rightNode.textContent === "-3") {
    Balls[25].style.visibility = "visible";
    Balls[25].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-2, -4)
  if (leftNode.textContent === "-2" && rightNode.textContent === "-4") {
    Balls[26].style.visibility = "visible";
    Balls[26].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-1, 4)
  if (leftNode.textContent === "-1" && rightNode.textContent === "4") {
    Balls[27].style.visibility = "visible";
    Balls[27].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-1, 3)
  if (leftNode.textContent === "-1" && rightNode.textContent === "3") {
    Balls[28].style.visibility = "visible";
    Balls[28].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-1, 2)
  if (leftNode.textContent === "-1" && rightNode.textContent === "2") {
    Balls[29].style.visibility = "visible";
    Balls[29].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-1, 1)
  if (leftNode.textContent === "-1" && rightNode.textContent === "1") {
    Balls[30].style.visibility = "visible";
    Balls[30].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-1, 0)
  if (leftNode.textContent === "-1" && rightNode.textContent === "0") {
    Balls[31].style.visibility = "visible";
    Balls[31].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-1, -1)
  if (leftNode.textContent === "-1" && rightNode.textContent === "-1") {
    Balls[32].style.visibility = "visible";
    Balls[32].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-1, -2)
  if (leftNode.textContent === "-1" && rightNode.textContent === "-2") {
    Balls[33].style.visibility = "visible";
    Balls[33].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-1, -3)
  if (leftNode.textContent === "-1" && rightNode.textContent === "-3") {
    Balls[34].style.visibility = "visible";
    Balls[34].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (-1, -4)
  if (leftNode.textContent === "-1" && rightNode.textContent === "-4") {
    Balls[35].style.visibility = "visible";
    Balls[35].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (0, 4)
  if (leftNode.textContent === "0" && rightNode.textContent === "4") {
    Balls[36].style.visibility = "visible";
    Balls[36].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (0, 3)
  if (leftNode.textContent === "0" && rightNode.textContent === "3") {
    Balls[37].style.visibility = "visible";
    Balls[37].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (0, 2)
  if (leftNode.textContent === "0" && rightNode.textContent === "2") {
    Balls[38].style.visibility = "visible";
    Balls[38].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (0, 1)
  if (leftNode.textContent === "0" && rightNode.textContent === "1") {
    Balls[39].style.visibility = "visible";
    Balls[39].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (0, 0)
  if (leftNode.textContent === "0" && rightNode.textContent === "0") {
    Balls[40].style.visibility = "visible";
    Balls[40].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (0, -1)
  if (leftNode.textContent === "0" && rightNode.textContent === "-1") {
    Balls[41].style.visibility = "visible";
    Balls[41].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (0, -2)
  if (leftNode.textContent === "0" && rightNode.textContent === "-2") {
    Balls[42].style.visibility = "visible";
    Balls[42].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (0, -3)
  if (leftNode.textContent === "0" && rightNode.textContent === "-3") {
    Balls[43].style.visibility = "visible";
    Balls[43].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (0, -4)
  if (leftNode.textContent === "0" && rightNode.textContent === "-4") {
    Balls[44].style.visibility = "visible";
    Balls[44].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (1, 4)
  if (leftNode.textContent === "1" && rightNode.textContent === "4") {
    Balls[45].style.visibility = "visible";
    Balls[45].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (1, 3)
  if (leftNode.textContent === "1" && rightNode.textContent === "3") {
    Balls[46].style.visibility = "visible";
    Balls[46].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (1, 2)
  if (leftNode.textContent === "1" && rightNode.textContent === "2") {
    Balls[47].style.visibility = "visible";
    Balls[47].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (1, 1)
  if (leftNode.textContent === "1" && rightNode.textContent === "1") {
    Balls[48].style.visibility = "visible";
    Balls[48].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (1, 0)
  if (leftNode.textContent === "1" && rightNode.textContent === "0") {
    Balls[49].style.visibility = "visible";
    Balls[49].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (1, -1)
  if (leftNode.textContent === "1" && rightNode.textContent === "-1") {
    Balls[50].style.visibility = "visible";
    Balls[50].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (1, -2)
  if (leftNode.textContent === "1" && rightNode.textContent === "-2") {
    Balls[51].style.visibility = "visible";
    Balls[51].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (1, -3)
  if (leftNode.textContent === "1" && rightNode.textContent === "-3") {
    Balls[52].style.visibility = "visible";
    Balls[52].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (1, -4)
  if (leftNode.textContent === "1" && rightNode.textContent === "-4") {
    Balls[53].style.visibility = "visible";
    Balls[53].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (2, 4)
  if (leftNode.textContent === "2" && rightNode.textContent === "4") {
    Balls[54].style.visibility = "visible";
    Balls[54].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (2, 3)
  if (leftNode.textContent === "2" && rightNode.textContent === "3") {
    Balls[55].style.visibility = "visible";
    Balls[55].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (2, 2)
  if (leftNode.textContent === "2" && rightNode.textContent === "2") {
    Balls[56].style.visibility = "visible";
    Balls[56].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (2, 1)
  if (leftNode.textContent === "2" && rightNode.textContent === "1") {
    Balls[57].style.visibility = "visible";
    Balls[57].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (2, 0)
  if (leftNode.textContent === "2" && rightNode.textContent === "0") {
    Balls[58].style.visibility = "visible";
    Balls[58].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (2, -1)
  if (leftNode.textContent === "2" && rightNode.textContent === "-1") {
    Balls[59].style.visibility = "visible";
    Balls[59].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (2, -2)
  if (leftNode.textContent === "2" && rightNode.textContent === "-2") {
    Balls[60].style.visibility = "visible";
    Balls[60].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (2, -3)
  if (leftNode.textContent === "2" && rightNode.textContent === "-3") {
    Balls[61].style.visibility = "visible";
    Balls[61].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (2, -4)
  if (leftNode.textContent === "2" && rightNode.textContent === "-4") {
    Balls[62].style.visibility = "visible";
    Balls[62].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (3, 4)
  if (leftNode.textContent === "3" && rightNode.textContent === "4") {
    Balls[63].style.visibility = "visible";
    Balls[63].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (3, 3)
  if (leftNode.textContent === "3" && rightNode.textContent === "3") {
    Balls[64].style.visibility = "visible";
    Balls[64].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (3, 2)
  if (leftNode.textContent === "3" && rightNode.textContent === "2") {
    Balls[65].style.visibility = "visible";
    Balls[65].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (3, 1)
  if (leftNode.textContent === "3" && rightNode.textContent === "1") {
    Balls[66].style.visibility = "visible";
    Balls[66].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (3, 0)
  if (leftNode.textContent === "3" && rightNode.textContent === "0") {
    Balls[67].style.visibility = "visible";
    Balls[67].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (3, -1)
  if (leftNode.textContent === "3" && rightNode.textContent === "-1") {
    Balls[68].style.visibility = "visible";
    Balls[68].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (3, -2)
  if (leftNode.textContent === "3" && rightNode.textContent === "-2") {
    Balls[69].style.visibility = "visible";
    Balls[69].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (3, -3)
  if (leftNode.textContent === "3" && rightNode.textContent === "-3") {
    Balls[70].style.visibility = "visible";
    Balls[70].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (3, -4)
  if (leftNode.textContent === "3" && rightNode.textContent === "-4") {
    Balls[71].style.visibility = "visible";
    Balls[71].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (4, 4)
  if (leftNode.textContent === "4" && rightNode.textContent === "4") {
    Balls[72].style.visibility = "visible";
    Balls[72].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (4, 3)
  if (leftNode.textContent === "4" && rightNode.textContent === "3") {
    Balls[73].style.visibility = "visible";
    Balls[73].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (4, 2)
  if (leftNode.textContent === "4" && rightNode.textContent === "2") {
    Balls[74].style.visibility = "visible";
    Balls[74].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (4, 1)
  if (leftNode.textContent === "4" && rightNode.textContent === "1") {
    Balls[75].style.visibility = "visible";
    Balls[75].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (4, 0)
  if (leftNode.textContent === "4" && rightNode.textContent === "0") {
    Balls[76].style.visibility = "visible";
    Balls[76].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (4, -1)
  if (leftNode.textContent === "4" && rightNode.textContent === "-1") {
    Balls[77].style.visibility = "visible";
    Balls[77].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (4, -2)
  if (leftNode.textContent === "4" && rightNode.textContent === "-2") {
    Balls[78].style.visibility = "visible";
    Balls[78].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (4, -3)
  if (leftNode.textContent === "4" && rightNode.textContent === "-3") {
    Balls[79].style.visibility = "visible";
    Balls[79].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
  // (4, -4)
  if (leftNode.textContent === "4" && rightNode.textContent === "-4") {
    Balls[80].style.visibility = "visible";
    Balls[80].setAttribute("fill", `url(#mx-gradient-${color}-1-ffffff-1-e-0)`);
    allCoordinates.push([leftNode.textContent, rightNode.textContent, color]);
  }
}

var checkWin = function () {
  let blueArray = [];
  let redArray = [];

  blueArray = allCoordinates.filter((item) => {
    return item.includes("0000ff");
  });

  redArray = allCoordinates.filter((item) => {
    return item.includes("ff0000");
  });

  if (redArray.length >= 3) {
    if (
      Math.abs(Number(redArray[redArray.length - 1][0])) -
        Math.abs(Number(redArray[redArray.length - 3][0])) ===
        2 ||
      Math.abs(Number(redArray[redArray.length - 1][1])) -
        Math.abs(Number(redArray[redArray.length - 3][1])) ===
        2
    ) {
      displayMessage.style.visibility = "visible";
      displayMessageText.textContent =
        "The red team has blown it! Well done to the blues.";
      redUpArrow1.style.visibility = "hidden";
      redUpArrow2.style.visibility = "hidden";
      redDownArrow1.style.visibility = "hidden";
      redDownArrow2.style.visibility = "hidden";
      blueUpArrow1.style.visibility = "hidden";
      blueUpArrow2.style.visibility = "hidden";
      blueDownArrow1.style.visibility = "hidden";
      blueDownArrow2.style.visibility = "hidden";
    }
  } else if (blueArray.length >= 3) {
    if (
      Math.abs(Number(blueArray[blueArray.length - 1][0])) -
        Math.abs(Number(blueArray[blueArray.length - 3][0])) ===
        2 ||
      Math.abs(Number(blueArray[blueArray.length - 1][1])) -
        Math.abs(Number(blueArray[blueArray.length - 3][1])) ===
        2
    ) {
      displayMessage.style.visibility = "visible";
      displayMessageText.textContent =
        "The blue team has blown it! Well done to the reds.";
      redUpArrow1.style.visibility = "hidden";
      redUpArrow2.style.visibility = "hidden";
      redDownArrow1.style.visibility = "hidden";
      redDownArrow2.style.visibility = "hidden";
      blueUpArrow1.style.visibility = "hidden";
      blueUpArrow2.style.visibility = "hidden";
      blueDownArrow1.style.visibility = "hidden";
      blueDownArrow2.style.visibility = "hidden";
    }
  }
};

redBall.addEventListener("click", function () {
  checkInput(redTextLeft, redTextRight, "ff0000");
  checkWin();
});

blueBall.addEventListener("click", function () {
  checkInput(blueTextLeft, blueTextRight, "0000ff");
  checkWin();
});

// First number: Red
redUpArrow1.addEventListener("click", function () {
  if (redTextLeft.textContent < 4) {
    redTextLeft.textContent++;
  }
});

redDownArrow1.addEventListener("click", function () {
  if (redTextLeft.textContent > -4) {
    redTextLeft.textContent--;
  }
});

// Second number: Red
redUpArrow2.addEventListener("click", function () {
  if (redTextRight.textContent < 4) {
    redTextRight.textContent++;
  }
});

redDownArrow2.addEventListener("click", function () {
  if (redTextRight.textContent > -4) {
    redTextRight.textContent--;
  }
});

// First number: Blue
blueUpArrow1.addEventListener("click", function () {
  if (blueTextLeft.textContent < 4) {
    blueTextLeft.textContent++;
  }
});

blueDownArrow1.addEventListener("click", function () {
  if (blueTextLeft.textContent > -4) {
    blueTextLeft.textContent--;
  }
});

// Second number: Blue
blueUpArrow2.addEventListener("click", function () {
  if (blueTextRight.textContent < 4) {
    blueTextRight.textContent++;
  }
});

blueDownArrow2.addEventListener("click", function () {
  if (blueTextRight.textContent > -4) {
    blueTextRight.textContent--;
  }
});
