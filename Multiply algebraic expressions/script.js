// General_____________________________________________
let checkButton = document.getElementById('checkButton');
let solveButton = document.getElementById('solveButton');
let startButton = document.getElementById('startButton');
let resetButton = document.getElementById('resetButton');
let startPanel = document.getElementById('startPanel');

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
let hiddenNums = document.querySelectorAll('.invisible');

// The function below hides the numbers when the page loads
// window.addEventListener("load", function () {
//     hiddenNums.forEach(number => {
//         number.innerText = ''
//     });
// });

// The function below toggles the visibility of the numbers
hiddenNums.forEach(number => {
    number.addEventListener("click", function(e){
        const targetElement = e.target;
        if (targetElement.dataset.show == 'false') {
            targetElement.innerText = '5+5'
            targetElement.dataset.show = true;
        } else {
            targetElement.innerText = '';
            targetElement.dataset.show = false;
        }
    });
});

let plusMinus = ['-', '', '-', '', '-', '', '-', '', '-', ''];
let letters = ['a', 'b', ''];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ''];
let operators = ['+', '-'];

let addOrSubtract = document.querySelectorAll('.plus-minus');
let coefficients = document.querySelectorAll('.coefficient');
let variables = document.querySelectorAll('.variable');

addOrSubtract.forEach(item => {
    item.textContent = plusMinus[Math.floor(Math.random() * 10)]
    // console.log("Random operator: " + plusMinus[Math.floor(Math.random() * 10)]);
})

coefficients.forEach(item => {
    item.textContent = numbers[Math.floor(Math.random() * 10)]
    // console.log("Random number: " + numbers[Math.floor(Math.random() * 10)]);
})

variables.forEach(item => {
    item.textContent = letters[Math.floor(Math.random() * 3)]
    // console.log("Random letter: " + letters[Math.floor(Math.random() * 3)]);
})



