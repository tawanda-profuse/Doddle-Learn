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

    // All cells that are not in the first column or first row:
    // hiddenNums.forEach(number => {
    //     // The function below toggles the visibility of the numbers
    //     number.addEventListener("click", function (e) {
    //         const targetElement = e.target;
    //         if (targetElement.dataset.show == 'false') {
    //             targetElement.innerHTML = `${5}`;
    //             targetElement.dataset.show = true;
    //         } else {
    //             targetElement.innerHTML = '';
    //             targetElement.dataset.show = false;
    //         }
    //     });
    // });
    hiddenNums[0].addEventListener("click", function (e) {
        const targetElement = e.target;
        if (targetElement.dataset.show == 'false') {
            // let [operand, multiplier, variable1, operator, multiplicand1, multiplicand2, variable2] = [
            let [multiplier, multiplicand1, multiplicand2, variable1, variable1_1, variable2, variable2_2] = [
                // multiplier
                (multipliers[0].innerHTML[0] == '-' ? -multipliers[0].innerHTML[1] : multipliers[0].innerHTML[0]),
                // multiplicand1
                (multiplicands[0].innerHTML[0] == '-' ? -multiplicands[0].innerHTML[1] : multiplicands[0].innerHTML[0]),
                // multiplicand2
                (// -- Negative operand
                    multiplicands[0].innerHTML[3] == '-' ?
                        -multiplicands[0].innerHTML[4] : multiplicands[0].innerHTML[2] == '-' ? -multiplicands[0].innerHTML[3] : multiplicands[0].innerHTML[1] == '-' ? -multiplicands[0].innerHTML[2] :
                            // -- Positive operand
                            multiplicands[0].innerHTML[3] == '+' ? multiplicands[0].innerHTML[4] : multiplicands[0].innerHTML[2] == '+' ? multiplicands[0].innerHTML[3] : multiplicands[0].innerHTML[1] == '+' ? multiplicands[0].innerHTML[2] : multiplicands[0].innerHTML[4]),
                // variable1
                (multiplicands[0].innerHTML.includes('a') ?
                    multiplicands[0].innerHTML[2] || multiplicands[0].innerHTML[1] == 'a' ? 'a' : ' ' : ''),
                // variable 1_1
                (multipliers[0].innerHTML[2] == 'a' ? 'a' :
                    multipliers[0].innerHTML[1] == 'a' ? 'a' :
                        multipliers[0].innerHTML[2] == 'b' ? 'b' :
                            multipliers[0].innerHTML[1] == 'b' ? 'b' : ''),
                // variable2
                (multiplicands[0].innerHTML.includes('a') ?
                    multiplicands[0].innerHTML[5] == 'a' || multiplicands[0].innerHTML[4] == 'a' || multiplicands[0].innerHTML[3] == 'a' ? 'a' : '' :
                    multiplicands[0].innerHTML.includes('b') ?
                        multiplicands[0].innerHTML[5] == 'b' || multiplicands[0].innerHTML[4] == 'b' || multiplicands[0].innerHTML[3] == 'b' ? 'b' : '' : ''),
                // variable2
                (multipliers[0].innerHTML[5] == 'a' ? 'a' :
                    multipliers[0].innerHTML[4] == 'a' ? 'a' :
                        multipliers[0].innerHTML[3] == 'a' ? 'a' :
                            multipliers[0].innerHTML[5] == 'b' ? 'b' :
                                multipliers[0].innerHTML[4] == 'b' ? 'b' :
                                    multipliers[0].innerHTML[3] == 'b' ? 'b' : ''),
                // ['-',6, a, +, 5, b]
                // [6, a, +, 5, b]
                // [6, +, 5, b]
                // [6, +, 5]
                // -6a
                // -- (1-8)???
            ];
            let checkDouble = (variable1 == 'a' && variable1_1 == 'a') ? `<sup>2</sup>` :
                (variable1 == 'b' && variable1_1 == 'b') ? `<sup>2</sup>` : `${variable1}${variable1_1}`;
            let checkDouble2 = (variable2 == 'a' && variable2_2 == 'a') ? `<sup>2</sup>` :
                (variable2 == 'b' && variable2_2 == 'b') ? `<sup>2</sup>` : `${variable2}${variable2_2}`;
            targetElement.innerHTML = `${multiplier * multiplicand1}${checkDouble}${multiplier * multiplicand2}${checkDouble2}`;
            targetElement.dataset.show = true;
        } else {
            targetElement.innerHTML = '';
            targetElement.dataset.show = false;
        }
    });

    // All cells in the first column:
    multiplicands.forEach(number => {
        let [operand, coefficient, variable, operator, coefficient2, variable2] = [
            operands[Math.floor(Math.random() * 2)],
            numbers2[Math.floor(Math.random() * 9)],
            aLetters[Math.floor(Math.random() * 2)],
            operators[Math.floor(Math.random() * 2)],
            numbers2[Math.floor(Math.random() * 9)],
            letters[Math.floor(Math.random() * 3)],
        ];

        // The function below toggles the visibility of the numbers
        number.addEventListener("click", function (e) {
            const targetElement = e.target;
            if (targetElement.dataset.show == 'false') {
                // 9a--4a
                targetElement.innerHTML = `${operand}${coefficient}${variable}${operator}${coefficient2}${variable2}`;
                console.log("Multiplicand: " + targetElement.innerHTML);
                targetElement.dataset.show = true;
            } else {
                targetElement.innerHTML = '';
                targetElement.dataset.show = false;
            }
        });
    });

    // All cells in the first row
    multipliers.forEach(number => {
        const [coefficient, variable] = [
            numbers[Math.floor(Math.random() * 18)],
            letters[Math.floor(Math.random() * 3)]
        ];
        multiplier = coefficient;
        // The function below toggles the visibility of the numbers
        number.addEventListener("click", function (e) {
            const targetElement = e.target;
            if (targetElement.dataset.show == 'false') {
                targetElement.innerHTML = `${coefficient}${variable}`;
                if (targetElement.innerHTML[0] == '-') {
                    console.log("Multiplier: " + targetElement.innerHTML[0] + targetElement.innerHTML[1]);
                } else if (targetElement.innerHTML[0] == NaN) {
                    console.log("Multiplier: " + 1);
                } else {
                    console.log("Multiplier: " + targetElement.innerHTML[0]);
                }
                targetElement.dataset.show = true;
            } else {
                targetElement.innerHTML = '';
                targetElement.dataset.show = false;
            }
        });
    });
});

let operands = ['-', '']
let letters = ['a', 'b', ''];
let aLetters = ['a', ''];
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let operators = ['+', '-'];



