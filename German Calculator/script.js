// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');
var startPanel = document.getElementById('startPanel');

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

// startButton.addEventListener("click", function () {
//     startPanel.style.display = 'none';
//     startButton.style.display = 'none';
// })
// Bespoke functions_____________________________________
var display = document.querySelector(".display");
var numbers = document.querySelectorAll(".inputs");
var clear = document.querySelector(".clear");

var expression = '';

numbers.forEach((item) => {
    item.addEventListener("click", function(e){
        let eventTarget = e.target;
        expression += eventTarget.textContent;
        console.log(expression);
        // display.textContent = expression;
    })
});

clear.addEventListener("click", function(){
    display.innerHTML = 0;
    expression = '';
})