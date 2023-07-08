// General_____________________________________________
let checkButton = document.getElementById('checkButton')
let solveButton = document.getElementById('solveButton')
let startButton = document.getElementById('startButton')
let resetButton = document.getElementById('resetButton')
let startPanel = document.getElementById('startPanel')

resetButton.addEventListener('click', function () {
    window.location.reload()
    // window.location.href = "";
    return false
})

function check() {
    console.log('check initiated')
}

function solve() {
    console.log('solve initiated')
}
// Bespoke functions_____________________________________
let hiddenNums = document.querySelectorAll('.invisible')
let multipliers = document.querySelectorAll('.multiplier')
let multiplicands = document.querySelectorAll('.multiplicand')
let tableData = document.querySelectorAll('td:not(td:nth-child(1))')

window.addEventListener('load', function () {
    tableData.forEach(number => {
        // Hides the numbers when the page loads
        number.innerHTML = ''
    })

    // All cells that are not in the first column or first row:
    hiddenNums[0].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[0].innerHTML
            let horizontalCell = multiplicands[0].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[1].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[1].innerHTML
            let horizontalCell = multiplicands[0].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[2].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[2].innerHTML
            let horizontalCell = multiplicands[0].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[3].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[0].innerHTML
            let horizontalCell = multiplicands[1].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[4].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[1].innerHTML
            let horizontalCell = multiplicands[1].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[5].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[2].innerHTML
            let horizontalCell = multiplicands[1].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[6].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[0].innerHTML
            let horizontalCell = multiplicands[2].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[7].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[1].innerHTML
            let horizontalCell = multiplicands[2].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[8].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[2].innerHTML
            let horizontalCell = multiplicands[2].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[9].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[0].innerHTML
            let horizontalCell = multiplicands[3].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[10].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[1].innerHTML
            let horizontalCell = multiplicands[3].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[11].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[2].innerHTML
            let horizontalCell = multiplicands[3].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[12].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[0].innerHTML
            let horizontalCell = multiplicands[4].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[13].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[1].innerHTML
            let horizontalCell = multiplicands[4].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    hiddenNums[14].addEventListener('click', function (e) {
        const targetElement = e.target
        if (targetElement.dataset.show == 'false') {
            let verticalCell = multipliers[2].innerHTML
            let horizontalCell = multiplicands[4].innerHTML
            let [
                operand,
                multiplier,
                multiplicand1,
                multiplicand2,
                variable1,
                variable2,
                operator
            ] = [
                // operand--------------
                // return '-'
                verticalCell[0] > 0 && horizontalCell[0] == '-' ? '-' : 
                verticalCell[0] == '-' && horizontalCell[0] > 0 ? '-' :
                // return ''
                verticalCell[0] == '-' && horizontalCell[0] == '-' ?
                '' :
                '',
                // multiplier--------------
                verticalCell[0] == '-' ? verticalCell[1] : verticalCell[0],
                // multiplicand1--------------
                horizontalCell[0] == '-' ? horizontalCell[1] : horizontalCell[0],
                // multiplicand2--------------
                horizontalCell[horizontalCell.length-1] > 0 ? horizontalCell[horizontalCell.length-1] :
                horizontalCell[horizontalCell.length - 1] == 'a' 
                || horizontalCell[horizontalCell.length - 1] == 'b' ? horizontalCell[horizontalCell.length - 2]  :
                '',
                // variable1 --------------
                // return 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+3] == 'a' ? 'a<sup>2</sup>' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[-1+2] == 'a' ? 'a<sup>2</sup>' :
                // return ab
                horizontalCell[2] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[2] == 'a' && verticalCell[1] == 'b' ?
                'ab' :
                horizontalCell[1] == 'a' && verticalCell[2] == 'b' ?
                'ab' :
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[-1+3] == 'a' ? 'ab' :
                // return b:
                verticalCell[verticalCell.length-1] == 'b' ? 'b' : 
                // return a:
                verticalCell[2] == 'a' && horizontalCell[0] > 0 && horizontalCell[2] != '-' ? 'a' :
                verticalCell[1] == 'a' && horizontalCell[0] > 0 ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[1] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] > 0 && horizontalCell[2] == 'a' ? 'a' :
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-3] != 'a' ? 'a' :
                '',
                // variable2--------------
                // return b:
                horizontalCell[horizontalCell.length-1] == 'b' && verticalCell[verticalCell.length-1] > 0 || verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] > 0 ?
                 'b' :
                // return a:
                horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] > 0 || verticalCell[2] == 'a' && horizontalCell[horizontalCell.length - 1] > 0  ? 'a' : verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] > 0 ? 'a' :
                // return ab:
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'b' || horizontalCell[horizontalCell.length-1] == 'a' && verticalCell[verticalCell.length-1] == 'b' ?
                'ab' :
                // return 'b<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'b' && horizontalCell[horizontalCell.length-1] == 'b' ? 'b<sup>2</sup>' : 
                // return 'a<sup>2</sup>'
                verticalCell[verticalCell.length-1] == 'a' && horizontalCell[horizontalCell.length-1] == 'a' ? 'a<sup>2</sup>' :
                // return ''
                '',
                // operator (+, -)--------------
                // return '+'
                (verticalCell[0] == '-' && horizontalCell[1] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[2] == '-') ||
                (verticalCell[0] == '-' && horizontalCell[3] == '-') ||
                (verticalCell[1] == 'a' && horizontalCell[1] == '+') ||
                (verticalCell[1] == 'b' && horizontalCell[1] == '+') 
                || (horizontalCell[1] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[2] == '+' && verticalCell[0] != '-') 
                || (horizontalCell[3] == '+' && verticalCell[0] != '-') 
                ?
                '+' :
                // return '-'
                horizontalCell[horizontalCell.length-2] == '-' && verticalCell[0] > 0 
                || horizontalCell[horizontalCell.length-3] == '-' && verticalCell[0] > 0 
                || verticalCell[0] > 0 && horizontalCell[-1+4] == '-'   
                || horizontalCell[horizontalCell.length-2] == '-'  
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-2] == '+' 
                || verticalCell[0] == '-' && horizontalCell[horizontalCell.length-3] == '+' 
                ? '-' :
                // return ''
                ''
            ]
            let product1 = multiplier * multiplicand1
            let product2 = multiplier * multiplicand2
            
            if(multiplier == undefined || multiplicand1 == undefined || multiplicand2 == undefined){
                targetElement.preventDefault();
            } else {
                targetElement.innerHTML = (variable1 == '' && variable2 == '') ? eval(`${operand}${product1}${variable1}${operator}${product2}${variable2}`) : `${operand}${product1}${variable1}${operator}${product2}${variable2}`;
            }
            targetElement.dataset.show = true
        } else {
            targetElement.innerHTML = ''
            targetElement.dataset.show = false
        }
    });

    // All cells in the first column:
    multiplicands.forEach(number => {
        let [operand, coefficient, variable, operator, coefficient2, variable2] = [
            operands[Math.floor(Math.random() * 2)],
            numbers[Math.floor(Math.random() * 9)],
            aLetters[Math.floor(Math.random() * 2)],
            operators[Math.floor(Math.random() * 2)],
            numbers[Math.floor(Math.random() * 9)],
            letters[Math.floor(Math.random() * 3)]
        ];
        // The function below toggles the visibility of the numbers
        number.addEventListener('click', function (e) {
            const targetElement = e.target
            if (targetElement.dataset.show == 'false') {
                targetElement.innerHTML = `${operand}${coefficient}${variable}${operator}${coefficient2}${variable2}`;
                targetElement.dataset.show = true
            } else {
                targetElement.innerHTML = ''
                targetElement.dataset.show = false
            }
        })
    })

    // All cells in the first row
    multipliers.forEach(number => {
        const [operand, coefficient, variable] = [
            operands[Math.floor(Math.random() * 2)],
            numbers[Math.floor(Math.random() * 9)],
            letters[Math.floor(Math.random() * 3)]
        ];
        // The function below toggles the visibility of the numbers
        number.addEventListener('click', function (e) {
            const targetElement = e.target
            if (targetElement.dataset.show == 'false') {
                targetElement.innerHTML = `${operand}${coefficient}${variable}`;
                targetElement.dataset.show = true
            } else {
                targetElement.innerHTML = ''
                targetElement.dataset.show = false
            }
        })
    })
})

let operands = ['-', '']
let letters = ['a', 'b', '']
let aLetters = ['a', '']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9]
let operators = ['+', '-']