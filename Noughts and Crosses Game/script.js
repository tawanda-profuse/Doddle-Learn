// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');
var helpButton = document.getElementById('helpButton');
var startPanel = document.getElementById('startPanel');

helpButton.addEventListener("mouseover", function () {
    var x = document.getElementById("help-text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})

helpButton.addEventListener("mouseout", function () {
    var x = document.getElementById("help-text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})

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
// Bespoke functions_____________________________________
let noteletText = document.getElementById("notelet-text")
let noteletImage = document.getElementById("notelet-img")
let switchButton = document.querySelector('#switch-button')
let tableDataItems = document.querySelectorAll('td')
let table = document.querySelector('table')
let whiteBoard = document.getElementById('white-board')
let crossCheckBox = document.querySelector('#cross')
let noughtCheckBox = document.querySelector('#nought')
// Cells
var one = document.getElementById("1")
var two = document.getElementById("2")
var three = document.getElementById("3")
var four = document.getElementById("4")
var five = document.getElementById("5")
var six = document.getElementById("6")
var seven = document.getElementById("7")
var eight = document.getElementById("8")
var nine = document.getElementById("9")
// Cells
let currentCell

// Placing a cross in a cell
crossCheckBox.addEventListener("click", function () {
    if (currentCell.classList.contains('nought')) {
        currentCell.classList.remove('nought')
    }
    currentCell.classList.add('cross')
    drawLine()
})

// Placing a nought in a cell
noughtCheckBox.addEventListener("click", function () {
    if (currentCell.classList.contains('cross')) {
        currentCell.classList.remove('cross')
    }
    currentCell.classList.add("nought")
    drawLine()
})

tableDataItems.forEach(element => {
    element.textContent = (Math.random() * (10 - 0.1) + 0.1).toFixed(2)

    element.addEventListener("click", function (e) {
        const targetElement = e.target
        var integerOptions = [300, 20, 10, 200, 500, 30, 1000, 100, 40, 50]
        var decimalOptions = [0.5, 0.1, 0.001, 0.05, 0.01, 0.2, 0.02, 0.4, 0.04, 0.3]
        var operandOptions = ['/', '*', '/', '*', '/', '*', '/', '*', '/', '*']
        var randomOp = operandOptions[Math.floor(Math.random() * 10)]
        var first = integerOptions[Math.floor(Math.random() * 10)]
        var second = decimalOptions[Math.floor(Math.random() * 10)]
        var multiplier = switchButton.dataset.item == 'integers' ? first : second
        let result = eval(targetElement.textContent + randomOp + multiplier) % 1 !== 0 ? eval(targetElement.textContent + randomOp + multiplier).toFixed(3) : eval(targetElement.textContent + randomOp + multiplier);
        var operand
        if (randomOp == '/') {
            operand = '<i class="fas fa-divide"></i>'
        } else {
            operand = '<i class="fas fa-times"></i>'
        }
        whiteBoard.innerHTML = `${operand}${multiplier}`
        noteletText.textContent = result
        noteletImage.style.display = 'inline-block';
        noteletText.style.display = 'none';

    });
});

// Functions for individual cells
one.addEventListener("click", function () {
    currentCell = this
    one.classList.add("in-focus");
    two.classList.remove("in-focus");
    three.classList.remove("in-focus");
    four.classList.remove("in-focus");
    five.classList.remove("in-focus");
    six.classList.remove("in-focus");
    seven.classList.remove("in-focus");
    eight.classList.remove("in-focus");
    nine.classList.remove("in-focus");
})

two.addEventListener("click", function () {
    currentCell = this
    one.classList.remove("in-focus");
    two.classList.add("in-focus");
    three.classList.remove("in-focus");
    four.classList.remove("in-focus");
    five.classList.remove("in-focus");
    six.classList.remove("in-focus");
    seven.classList.remove("in-focus");
    eight.classList.remove("in-focus");
    nine.classList.remove("in-focus");
})

three.addEventListener("click", function () {
    currentCell = this
    one.classList.remove("in-focus");
    two.classList.remove("in-focus");
    three.classList.add("in-focus");
    four.classList.remove("in-focus");
    five.classList.remove("in-focus");
    six.classList.remove("in-focus");
    seven.classList.remove("in-focus");
    eight.classList.remove("in-focus");
    nine.classList.remove("in-focus");
})

four.addEventListener("click", function () {
    currentCell = this
    one.classList.remove("in-focus");
    two.classList.remove("in-focus");
    three.classList.remove("in-focus");
    four.classList.add("in-focus");
    five.classList.remove("in-focus");
    six.classList.remove("in-focus");
    seven.classList.remove("in-focus");
    eight.classList.remove("in-focus");
    nine.classList.remove("in-focus");
})

five.addEventListener("click", function () {
    currentCell = this
    one.classList.remove("in-focus");
    two.classList.remove("in-focus");
    three.classList.remove("in-focus");
    four.classList.remove("in-focus");
    five.classList.add("in-focus");
    six.classList.remove("in-focus");
    seven.classList.remove("in-focus");
    eight.classList.remove("in-focus");
    nine.classList.remove("in-focus");
})

six.addEventListener("click", function () {
    currentCell = this
    one.classList.remove("in-focus");
    two.classList.remove("in-focus");
    three.classList.remove("in-focus");
    four.classList.remove("in-focus");
    five.classList.remove("in-focus");
    six.classList.add("in-focus");
    seven.classList.remove("in-focus");
    eight.classList.remove("in-focus");
    nine.classList.remove("in-focus");
})

seven.addEventListener("click", function () {
    currentCell = this
    one.classList.remove("in-focus");
    two.classList.remove("in-focus");
    three.classList.remove("in-focus");
    four.classList.remove("in-focus");
    five.classList.remove("in-focus");
    six.classList.remove("in-focus");
    seven.classList.add("in-focus");
    eight.classList.remove("in-focus");
    nine.classList.remove("in-focus");
})

eight.addEventListener("click", function () {
    currentCell = this
    one.classList.remove("in-focus");
    two.classList.remove("in-focus");
    three.classList.remove("in-focus");
    four.classList.remove("in-focus");
    five.classList.remove("in-focus");
    six.classList.remove("in-focus");
    seven.classList.remove("in-focus");
    eight.classList.add("in-focus");
    nine.classList.remove("in-focus");
})

nine.addEventListener("click", function () {
    currentCell = this
    one.classList.remove("in-focus");
    two.classList.remove("in-focus");
    three.classList.remove("in-focus");
    four.classList.remove("in-focus");
    five.classList.remove("in-focus");
    six.classList.remove("in-focus");
    seven.classList.remove("in-focus");
    eight.classList.remove("in-focus");
    nine.classList.add("in-focus");
})
// Functions for individual cells

noteletImage.addEventListener("click", function () {
    noteletText.style.display = 'block';
    noteletImage.style.display = 'none';
})

noteletText.addEventListener("click", function () {
    noteletImage.style.display = 'inline-block';
    noteletText.style.display = 'none';
})

switchButton.addEventListener("click", function () {
    if (switchButton.textContent == 'multiply by decimals') {
        switchButton.textContent = 'multiply by integers'
        switchButton.dataset.item = 'decimals'
    } else {
        switchButton.textContent = 'multiply by decimals'
        switchButton.dataset.item = 'integers'
    }
})

function drawLine() {
    if (one.classList.contains("cross") && two.classList.contains("cross") && three.classList.contains("cross") ||
        one.classList.contains("nought") && two.classList.contains("nought") && three.classList.contains("nought")
    ) {
        let newItem = document.createElement("div")
        newItem.classList.add("line")
        newItem.style.top = 15 + '%'
        table.append(newItem)
    }
    else if (four.classList.contains("cross") && five.classList.contains("cross") && six.classList.contains("cross") ||
        four.classList.contains("nought") && five.classList.contains("nought") && six.classList.contains("nought")
    ) {
        let newItem = document.createElement("div")
        newItem.classList.add("line")
        newItem.style.top = 50 + '%'
        table.append(newItem)
    } else if (seven.classList.contains("cross") && eight.classList.contains("cross") && nine.classList.contains("cross") ||
        seven.classList.contains("nought") && eight.classList.contains("nought") && nine.classList.contains("nought")) {
        let newItem = document.createElement("div")
        newItem.classList.add("line")
        newItem.style.top = 85 + '%'
        table.append(newItem)
    }
    // diagonal
    if (one.classList.contains("cross") && five.classList.contains("cross") && nine.classList.contains("cross") ||
        one.classList.contains("nought") && five.classList.contains("nought") && nine.classList.contains("nought")
    ) {
        let newItem = document.createElement("div")
        newItem.classList.add("line")
        newItem.style.top = 49 + '%'
        newItem.style.transform = 'rotate(35deg)'
        table.append(newItem)
    }
    else if (three.classList.contains("cross") && five.classList.contains("cross") && seven.classList.contains("cross") ||
        three.classList.contains("nought") && five.classList.contains("nought") && seven.classList.contains("nought")
    ) {
        let newItem = document.createElement("div")
        newItem.classList.add("line")
        newItem.style.top = 49 + '%'
        newItem.style.transform = 'rotate(-35deg)'
        table.append(newItem)
    }
    // vertical
    if (one.classList.contains("cross") && four.classList.contains("cross") && seven.classList.contains("cross") ||
        one.classList.contains("nought") && four.classList.contains("nought") && seven.classList.contains("nought")
    ) {
        let newItem = document.createElement("div")
        newItem.classList.add("line")
        newItem.style.top = 50 + '%'
        newItem.style.transform = 'rotate(90deg) translateY(150px)'

        table.append(newItem)
    } else if (two.classList.contains("cross") && five.classList.contains("cross") && eight.classList.contains("cross") ||
        two.classList.contains("nought") && five.classList.contains("nought") && eight.classList.contains("nought")
    ) {
        let newItem = document.createElement("div")
        newItem.classList.add("line")
        newItem.style.top = 50 + '%'
        newItem.style.transform = 'rotate(90deg)'
        table.append(newItem)
    } else if (three.classList.contains("cross") && six.classList.contains("cross") && nine.classList.contains("cross") ||
        three.classList.contains("nought") && six.classList.contains("nought") && nine.classList.contains("nought")
    ) {
        let newItem = document.createElement("div")
        newItem.classList.add("line")
        newItem.style.top = 50 + '%'
        newItem.style.transform = 'rotate(90deg) translateY(-150px)'
        table.append(newItem)
    }
}

