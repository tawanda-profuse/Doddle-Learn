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
// Bespoke functions_____________________________________
var redBall = document.querySelector(".red_ball");
var blueBall = document.querySelector(".blue_ball");
var CP = document.querySelector(".cartesian-plate");
var grid = document.querySelector(".axis");
var upArrows = document.querySelectorAll(".up-arrow");
var downArrows = document.querySelectorAll(".down-arrow");
var numbers = document.querySelectorAll(".number");
var allCoordinates = []
var displayMessage = document.querySelector(".display-message");

// Determine the winner
function validateRow(arr) {
    let winner
    let x_Distance = 0, y_Distance = 0

    let filteredReds = arr.filter(item => {
        return item.split(":")[0] === 'plot-red'
    });

    let filteredBlues = arr.filter(item => {
        return item.split(":")[0] === 'plot-blue'
    });

    if (arr.length >= 3) {
        x_Distance = arr[arr.length - 1].split(":")[1].split(",")[0] - arr[arr.length - 3].split(":")[1].split(",")[0]
        y_Distance = arr[arr.length - 1].split(":")[1].split(",")[1] - arr[arr.length - 3].split(":")[1].split(",")[1]
    }

    if (filteredReds.length === 3) {
        winner = filteredReds
        winners()
    } else if (filteredBlues.length === 3) {
        winner = filteredBlues
        winners()
    }

    // Closure function:
    function winners() {
        if (x_Distance === 26 || y_Distance === 26 || x_Distance === -26 || y_Distance === -26 || x_Distance === 26 && y_Distance === 26 || x_Distance === -26 && y_Distance === 26 || x_Distance === 26 && y_Distance === -26 || x_Distance === -26 && y_Distance === -26 || x_Distance === 0 && y_Distance === -26 || x_Distance === 26 && y_Distance === 0 || x_Distance === -26 && y_Distance === 0 || x_Distance === 0 && y_Distance === -26) {
            displayMessage.style.visibility = 'visible';
            displayMessage.textContent = arr[arr.length - 1].split(":")[0] === 'plot-blue' ?
                "The blue team has blown it! Well done to the reds." : "The red team has blown it! Well done to the blues."

            upArrows.forEach(arrow => {
                arrow.style.visibility = 'hidden'
            });

            downArrows.forEach(arrow => {
                arrow.style.visibility = 'hidden'
            });
        } else {
            filteredReds = []
            filteredBlues = []
            arr = []
        }
    }
}

redBall.addEventListener("click", function () {
    let redBall = document.createElement("div")
    redBall.classList.add("plot-red")
    let leftValue = 47 + (Number(numbers[0].textContent) * 13);
    let topValue = 47 - (Number(numbers[1].textContent) * 13);
    redBall.style.left = leftValue + "%"; // increments of 13 (-5, 8, 21, 34, [47], 60, 73, 86, 99)
    redBall.style.top = topValue + "%"; // increments of 13 (-5, 8, 21, 34, [47], 60, 73, 86, 99)
    let insertItem = `${redBall.classList}:${leftValue},${topValue}`;
    if (allCoordinates.includes(insertItem) || allCoordinates.includes('plot-blue:' + insertItem.split(":")[1])) {
        displayMessage.style.visibility = 'visible';
        displayMessage.textContent = "Cannot plot at those coordinates.";
        setTimeout(() => {
            displayMessage.style.visibility = 'hidden';
        }, 2000);
    } else {
        grid.append(redBall)
        allCoordinates.push(insertItem);
    }

    validateRow(allCoordinates)
});

blueBall.addEventListener("click", function () {
    let blueBall = document.createElement("div")
    blueBall.classList.add("plot-blue")
    let leftValue = 47 + (Number(numbers[2].textContent) * 13);
    let topValue = 47 - (Number(numbers[3].textContent) * 13);
    blueBall.style.left = leftValue + "%"; // increments of 13 (-5, 8, 21, 34, [47], 60, 73, 86, 99)
    blueBall.style.top = topValue + "%"; // increments of 13 (-5, 8, 21, 34, [47], 60, 73, 86, 99)
    let insertItem = `${blueBall.classList}:${leftValue},${topValue}`;
    if (allCoordinates.includes(insertItem) || allCoordinates.includes('plot-red:' + insertItem.split(":")[1])) {
        displayMessage.style.visibility = 'visible';
        displayMessage.textContent = "Cannot plot at those coordinates.";
        setTimeout(() => {
            displayMessage.style.visibility = 'hidden';
        }, 2000);
    } else {
        grid.append(blueBall)
        allCoordinates.push(insertItem);
    }

    validateRow(allCoordinates)
});

// First number: Red
upArrows[0].addEventListener("click", function () {
    if (numbers[0].textContent < 4) {
        numbers[0].textContent++;
    }
});

downArrows[0].addEventListener("click", function () {
    if (numbers[0].textContent > -4) {
        numbers[0].textContent--;
    }
});

// Second number: Red
upArrows[1].addEventListener("click", function () {
    if (numbers[1].textContent < 4) {
        numbers[1].textContent++;
    }
});

downArrows[1].addEventListener("click", function () {
    if (numbers[1].textContent > -4) {
        numbers[1].textContent--;
    }
});

// First number: Blue
upArrows[2].addEventListener("click", function () {
    if (numbers[2].textContent < 4) {
        numbers[2].textContent++;
    }
});

downArrows[2].addEventListener("click", function () {
    if (numbers[2].textContent > -4) {
        numbers[2].textContent--;
    }
});

// Second number: Blue
upArrows[3].addEventListener("click", function () {
    if (numbers[3].textContent < 4) {
        numbers[3].textContent++;
    }
});

downArrows[3].addEventListener("click", function () {
    if (numbers[3].textContent > -4) {
        numbers[3].textContent--;
    }
});

