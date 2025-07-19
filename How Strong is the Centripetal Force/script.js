//Speed__________________________________________________
var speedIndex = 3;
var speedKnobPos = ["0", "85px", "170px", "255px", "340px"];
var sknobPosition = document.getElementById("speedknob");
var truckSpeed = document.getElementById("rotateMe");
var rotationSpeeds = ["60s", "42s", "28s", "18s", "10s"];
var speedValue = [3];

function checkSpeed() {
  sknobPosition.style.left = speedKnobPos[speedIndex - 1];
  truckSpeed.style.animationDuration = rotationSpeeds[speedIndex - 1];
  checkArrowScale();
}

function addSpeed() {
  if (speedIndex >= 1) {
    if (speedIndex < 5) {
      speedIndex = speedIndex + 1;
      speedValue.push(speedIndex);
    }
  }
  checkSpeed();
}

function lessSpeed() {
  if (speedIndex <= 5) {
    if (speedIndex > 1) {
      speedIndex = speedIndex - 1;
      speedValue.push(speedIndex);
    }
  }
  checkSpeed();
}

// Mass__________________________________________________
var massIndex = 3;
var massKnobPos = ["0", "85px", "170px", "255px", "340px"];
var mknobPosition = document.getElementById("massknob");
var mytruck = document.getElementById("mytruck");
var truckSource = ["truckempty", "truck25", "truck50", "truck75", "truckfull"];
var massValue = [3];

function checkMass() {
  mknobPosition.style.left = massKnobPos[massIndex - 1];
  var massGraphic = "images/" + truckSource[massIndex - 1] + ".png";
  mytruck.src = massGraphic;
  checkArrowScale();
}

function addMass() {
  if (massIndex >= 1) {
    if (massIndex < 5) {
      massIndex = massIndex + 1;
      massValue.push(massIndex);
    }
  }
  checkMass();
}

function lessMass() {
  if (massIndex <= 5) {
    if (massIndex > 1) {
      massIndex = massIndex - 1;
      massValue.push(massIndex);
    }
  }
  checkMass();
}

// Radius______________________________________________
var radiusIndex = 3;
var radiusValue = [3];
var radiusPos = ["0", "25px", "50px", "75px", "100px"];
var radiusKnobPos = ["340px", "255px", "170px", "85px", "0"];
var truckPosition = document.getElementById("truck");
var rknobPosition = document.getElementById("radiusknob");
var myArrow = document.getElementById("myarrow");
var arrowPos = ["-20px", "5px", "30px", "55px", "80px"];

function checkRadius() {
  truckPosition.style.left = radiusPos[radiusIndex - 1];
  rknobPosition.style.left = radiusKnobPos[radiusIndex - 1];
  myArrow.style.left = arrowPos[radiusIndex - 1];
  checkArrowScale();
}

function lessRadius() {
  if (radiusIndex >= 1) {
    if (radiusIndex < 5) {
      radiusIndex = radiusIndex + 1;
      radiusValue.push(radiusIndex);
    }
  }
  checkRadius();
}

function addRadius() {
  if (radiusIndex <= 5) {
    if (radiusIndex > 1) {
      radiusIndex = radiusIndex - 1;
      radiusValue.push(radiusIndex);
    }
  }
  checkRadius();
}

// Arrow Scale_________________________________________
var endGame = document.getElementById("endGame");
function checkArrowScale() {
  var arrowScale =
    (massValue[massValue.length - 1] *
      (speedValue[speedValue.length - 1] * 1)) /
    (6 - radiusValue[radiusValue.length - 1]);
  var growth = ((arrowScale / 62.5) * 100 + 10).toString() + "%";
  console.log(growth);
  if (arrowScale == 25) {
    truckSpeed.classList.remove("rotate");
    endGame.style.display = "block";
  }
  myArrow.style.width = growth;
}

// General_____________________________________________
var startPanel = document.getElementById("startPanel");
var startButton = document.getElementById("startButton");
var resetButton = document.getElementById("resetButton");
var restart = document.getElementById("restart");

startButton.addEventListener("click", function () {
  startPanel.style.display = "none";
  startButton.style.display = "none";
});

resetButton.addEventListener("click", function () {
  window.location.reload();
  return false;
});

restart.addEventListener("click", function () {
  window.location.reload();
  return false;
});
