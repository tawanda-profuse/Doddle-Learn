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
// Bespoke functions_____________________________________
var redBall = document.querySelector(".red_ball");
var blueBall = document.querySelector(".blue_ball");
var CP = document.querySelector(".cartesian-plate");
var grid = document.querySelector(".grid");
var upArrows = document.querySelectorAll(".up-arrow");
var downArrows = document.querySelectorAll(".down-arrow");
var numbers = document.querySelectorAll(".number");
var allCoordinates = []
var displayMessage = document.querySelector(".display-message");
// var exists = Object.keys(obj).some(function(k) {
//     return obj[k] === "test1";
// });

// let exists = Object.values(obj).includes("test1");
// Checks for three consecutive values in an array
const checkThree = arr => {
    const prev = {
        element: null,
        count: 0
    };
    for (let i = 0; i < arr.length; i++) {
        const { count, element } = prev;
        if (count === 1 && element === arr[i]) {
            displayMessage.style.visibility = 'visible';
            displayMessage.textContent = allCoordinates[allCoordinates.length - 1].split(":")[0] == 'plot-red' ?
                "The red team has blown it! Well done to the blues." : "The blue team has blown it! Well done to the reds."
        };
        prev.count = element === arr[i] ? count + 1 : count;
        prev.element = arr[i];
    };
    return false;
};

redBall.addEventListener("click", function () {
    let redBall = document.createElement("div")
    redBall.classList.add("plot-red")
    let leftValue = 47 + (Number(numbers[0].textContent) * 13);
    let topValue = 370 - (Number(numbers[1].textContent) * 100);
    redBall.style.left = leftValue + "%"; // increments of 13 (-5, 8, 21, 34, [47], 60, 73, 86, 99)
    redBall.style.top = topValue + "%"; // increments of 100 (770, 670, 570, 470 , [370], 270, 170, 70, -30)
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

    let newTest = []
    for (let index = 0; index < allCoordinates.length; index++) {
        newTest.push(allCoordinates[index].split(":")[0])
    }

    checkThree(newTest);
});

blueBall.addEventListener("click", function () {
    let blueBall = document.createElement("div")
    blueBall.classList.add("plot-blue")
    let leftValue = 47 + (Number(numbers[2].textContent) * 13);
    let topValue = 370 - (Number(numbers[3].textContent) * 100);
    blueBall.style.left = leftValue + "%"; // increments of 13 (-5, 8, 21, 34, [47], 60, 73, 86, 99)
    blueBall.style.top = topValue + "%"; // increments of 100 (770, 670, 570, 470 , [370], 270, 170, 70, -30)
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

    checkThree(newTest);
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

// Third number: Blue
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

// Fourth number: Blue
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

