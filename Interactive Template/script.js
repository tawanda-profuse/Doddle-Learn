// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');
var startPanel = document.getElementById('startPanel');

resetButton.addEventListener("click", function () {
    window.location.reload();
    return false;
})

function check() {
    console.log('check initiated');
}

function solve() {
    console.log('solve initiated');
}

startButton.addEventListener("click", function () {
    startPanel.style.display = 'none';
    startButton.style.display = 'none';
})
// Bespoke functions_____________________________________