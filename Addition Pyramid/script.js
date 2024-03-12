// General_____________________________________________
var resetButton = document.getElementById("resetButton");

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
var three = document.getElementById("three");
var threeCircle = document.querySelector(".three");
var four = document.getElementById("four");
var fourCircle = document.querySelector(".four");
var rows = document.querySelectorAll(".row");
var notelets = document.querySelectorAll(".notelet");
var reveals = document.querySelectorAll(".reveal");
var numbers = document.querySelectorAll(".number text");

// Random numbers for addition
let addend1 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend2 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend3 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend4 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend5 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend6 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend7 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend8 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend9 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend10 = (Math.random() * (20 - 1) + 1).toFixed(0);

const numberValues = ([
  numbers[0].textContent,
  numbers[1].textContent,
  numbers[2].textContent,
  numbers[3].textContent,
  numbers[4].textContent,
  numbers[5].textContent,
  numbers[6].textContent,
  numbers[7].textContent,
  numbers[8].textContent,
  numbers[9].textContent,
] = [
  Number(addend7) +
    Number(addend8) +
    Number(addend8) +
    Number(addend9) +
    Number(addend8) +
    Number(addend9) +
    Number(addend9) +
    Number(addend10),
  Number(addend7) + Number(addend8) + Number(addend8) + Number(addend9),
  Number(addend8) + Number(addend9) + Number(addend9) + Number(addend10),
  Number(addend7) + Number(addend8),
  Number(addend8) + Number(addend9),
  Number(addend9) + Number(addend10),
  addend7,
  addend8,
  addend9,
  addend10,
]);

// Event listeners:
window.addEventListener("load", function () {
  rows[3].style.display = "none";
});

three.addEventListener("click", function () {
  if (rows[3].style.display === "block") {
    threeCircle.style.stroke = "red";
    fourCircle.style.stroke = "navy";
    rows[3].style.display = "none";
    // re-render all notelets:
    notelets.forEach((notelet) => {
      notelet.style.display = "block";
    });
  }
});

four.addEventListener("click", function () {
  threeCircle.style.stroke = "navy";
  fourCircle.style.stroke = "red";
  rows[3].style.display = "block";
  // re-render all notelets:
  notelets.forEach((notelet) => {
    notelet.style.display = "block";
  });
});

notelets.forEach((notelet) => {
  notelet.addEventListener("click", function () {
    notelet.style.display = "none";
  });
});

// Revealing/Hiding the notelets:
reveals[0].addEventListener("click", function () {
  notelets[0].style.display = "block";
});
reveals[1].addEventListener("click", function () {
  notelets[1].style.display = "block";
});
reveals[2].addEventListener("click", function () {
  notelets[2].style.display = "block";
});
reveals[3].addEventListener("click", function () {
  notelets[3].style.display = "block";
});
reveals[4].addEventListener("click", function () {
  notelets[4].style.display = "block";
});
reveals[5].addEventListener("click", function () {
  notelets[5].style.display = "block";
});
reveals[6].addEventListener("click", function () {
  notelets[6].style.display = "block";
});
reveals[7].addEventListener("click", function () {
  notelets[7].style.display = "block";
});
reveals[8].addEventListener("click", function () {
  notelets[8].style.display = "block";
});
reveals[9].addEventListener("click", function () {
  notelets[9].style.display = "block";
});
