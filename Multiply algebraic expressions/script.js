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
let multipliers = document.querySelectorAll('.multiplier');
let multiplicands = document.querySelectorAll('.multiplicand');
let tableData = document.querySelectorAll('td:not(td:nth-child(1))');

window.addEventListener("load", function () {
    tableData.forEach(number => {
        // Hides the numbers when the page loads
        number.innerHTML = ''
    });

    var [first, second, third] = [];

    // All cells that are not in the first column or first row:
    hiddenNums.forEach(number => {
        // The function below toggles the visibility of the numbers
        number.addEventListener("click", function (e) {
            const targetElement = e.target;
            if (targetElement.dataset.show == 'false') {
                targetElement.innerHTML = `${}`;
                // targetElement.innerHTML = `
                // <span class="plus-minus"></span>
                // <span class="coefficient"></span>
                // <span class="variable"></span>
                // <span class="plus-minus"></span>
                // <span class="coefficient"></span>
                // <span class="variable"></span>`;
                targetElement.dataset.show = true;
            } else {
                targetElement.innerHTML = '';
                targetElement.dataset.show = false;
            }
        });
    });

    // All cells in the first column:
    multiplicands.forEach(number => {
        let [operand, coefficient, variable, operator, coefficient2] = [
            operands[Math.floor(Math.random() * 2)],
            numbers[Math.floor(Math.random() * 9)],
            letters[Math.floor(Math.random() * 3)],
            operators[Math.floor(Math.random() * 2)],
            numbers[Math.floor(Math.random() * 9)]
        ];
        second = coefficient;
        third = coefficient2;
        // The function below toggles the visibility of the numbers
        number.addEventListener("click", function (e) {
            console.log(coefficient, coefficient2)
            const targetElement = e.target;
            if (targetElement.dataset.show == 'false') {
                targetElement.innerHTML = `${operand}${coefficient}${variable}${operator}${coefficient2}${variable}`;
                // targetElement.innerHTML = `
                // <span class="plus-minus">${operand}</span>
                // <span class="coefficient">${coefficient}</span>
                // <span class="variable">${variable}</span>
                // <span class="plus-minus">${operator}</span>
                // <span class="coefficient">${coefficient2}</span>
                // <span class="variable">${variable}</span>`;
                targetElement.dataset.show = true;
            } else {
                targetElement.innerHTML = '';
                targetElement.dataset.show = false;
            }
        });
    });

    // All cells in the first row
    multipliers.forEach(number => {
        const [operand, coefficient, variable] = [
            operands[Math.floor(Math.random() * 2)],
            numbers[Math.floor(Math.random() * 9)],
            letters[Math.floor(Math.random() * 3)]
        ];
        first = coefficient;
        // The function below toggles the visibility of the numbers
        number.addEventListener("click", function (e) {
            const targetElement = e.target;
            if (targetElement.dataset.show == 'false') {
                targetElement.innerHTML = `${operand}${coefficient}${variable}`;
                // targetElement.innerHTML = `
                // <span class="plus-minus">${operand}</span>
                // <span class="coefficient">${coefficient}</span>
                // <span class="variable">${variable}</span>`;
                targetElement.dataset.show = true;
            } else {
                targetElement.innerHTML = '';
                targetElement.dataset.show = false;
            }
        });
    });
});

let operands = ['-', ''];
let letters = ['a', 'b', ''];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let operators = ['+', '-'];



