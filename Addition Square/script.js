// General_____________________________________________
var checkButton = document.getElementById("checkButton");
var solveButton = document.getElementById("solveButton");
var startButton = document.getElementById("startButton");
var resetButton = document.getElementById("resetButton");
var helpButton = document.getElementById("helpButton");
var startPanel = document.getElementById("startPanel");

helpButton.addEventListener("mouseover", function () {
  var x = document.getElementById("help-text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

helpButton.addEventListener("mouseout", function () {
  var x = document.getElementById("help-text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

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
var hiddenNums = document.querySelectorAll(".invisible");
var visibleNums = document.querySelectorAll(".visible");
var skyBlue = document.querySelectorAll(".skyblue");
var turtle = document.querySelectorAll(".turquoise");
var fruit = document.querySelectorAll(".tomato");

// The function below hides the numbers when the page loads
window.addEventListener("load", function () {
  hiddenNums.forEach((number) => {
    number.innerText = "";
  });

  // The 3 functions below remove the background color when the page loads
  skyBlue.forEach((box) => {
    box.classList.remove("skyblue");
  });

  turtle.forEach((box) => {
    box.classList.remove("turquoise");
  });

  fruit.forEach((box) => {
    box.classList.remove("tomato");
  });
});

// The below function handles the visible numbers
visibleNums.forEach((number) => {
  number.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    if (eventTarget.dataset.show == "true") {
      eventTarget.innerText = "";
      eventTarget.dataset.show = "false";
    } else if (eventTarget.dataset.show == "false") {
      eventTarget.dataset.show = "true";
      eventTarget.innerText = eventTarget.dataset.value;
    }
  });
});

// The below function handles the hidden numbers
hiddenNums.forEach((number) => {
  number.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    if (eventTarget.dataset.show == "false") {
      eventTarget.innerText = eventTarget.dataset.value;
      eventTarget.dataset.show = true;
    } else {
      eventTarget.textContent = "";
      eventTarget.dataset.show = false;
    }
  });
});

// The three functions below toggle the background color of each box
skyBlue.forEach((box) => {
  box.addEventListener("click", function (e) {
    const eventTarget = e.target;
    if (eventTarget.dataset.sky == "off") {
      box.classList.add("skyblue");
      eventTarget.dataset.sky = "on";
    } else {
      box.classList.remove("skyblue");
      eventTarget.dataset.sky = "off";
    }
  });
});

turtle.forEach((box) => {
  box.addEventListener("click", function (e) {
    const eventTarget = e.target;
    if (eventTarget.dataset.turtle == "off") {
      box.classList.add("turquoise");
      eventTarget.dataset.turtle = "on";
    } else {
      box.classList.remove("turquoise");
      eventTarget.dataset.turtle = "off";
    }
  });
});

fruit.forEach((box) => {
  box.addEventListener("click", function (e) {
    const eventTarget = e.target;
    if (eventTarget.dataset.fruit == "off") {
      box.classList.add("tomato");
      eventTarget.dataset.fruit = "on";
    } else {
      box.classList.remove("tomato");
      eventTarget.dataset.fruit = "off";
    }
  });
});
