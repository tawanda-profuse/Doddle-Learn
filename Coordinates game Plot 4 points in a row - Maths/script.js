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

// Checks for three identical values in an array
const checkThree = (arr, color) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].split(":")[0] === color) {
            count++;
            if(count === 3){
                displayMessage.style.visibility = 'visible';
                displayMessage.textContent = allCoordinates[allCoordinates.length-1].split(":")[0] === 'plot-blue' ?
                "The blue team has blown it! Well done to the reds." : "The red team has blown it! Well done to the blues." 
                
                upArrows.forEach(arrow => {
                    arrow.style.visibility = 'hidden'
                });
                
                downArrows.forEach(arrow => {
                    arrow.style.visibility = 'hidden'
                });

            } else {
                displayMessage.style.textContent = '';
            }
        }
    }
};

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
        console.log(allCoordinates);
    }

    let newTest = []
    for (let index = 0; index < allCoordinates.length; index++) {
        newTest.push(allCoordinates[index].split(":")[0])
    }

    checkThree(newTest, redBall.classList[0]);
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

    let newTest = [];
    for (let index = 0; index < allCoordinates.length; index++) {
        newTest.push(allCoordinates[index].split(":")[0])
    }

    checkThree(newTest, blueBall.classList[0]);
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

