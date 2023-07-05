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
// var allCoordinates = new Set()
var allCoordinates = {}
allCoordinates[1] = {
    name: 'tawanda',
    car: 'wrangler'
}
allCoordinates[2] = {
    name: 'andrew',
    car: 'Tesla'
}

// if(allCoordinates.object.contains("Tesla")){
//     console.log("There")
// }
console.log(allCoordinates)

redBall.addEventListener("click", function () {
    let redBall = document.createElement("div")
    redBall.classList.add("plot-red")
    let leftValue = 47 + (Number(numbers[0].textContent) * 13);
    let topValue = 370 - (Number(numbers[1].textContent) * 100);
    redBall.style.left = leftValue + "%"; // increments of 13 (-5, 8, 21, 34, [47], 60, 73, 86, 99)
    redBall.style.top = topValue + "%"; // increments of 100 (770, 670, 570, 470 , [370], 270, 170, 70, -30)
    grid.append(redBall);  
    allCoordinates.add(
        {
            name: redBall,
            xValue: leftValue,
            yValue: topValue
        }
    ); 
});

blueBall.addEventListener("click", function () {
    let blueBall = document.createElement("div")
    blueBall.classList.add("plot-blue")
    let leftValue = 47 + (Number(numbers[2].textContent) * 13);
    let topValue = 370 - (Number(numbers[3].textContent) * 100);
    blueBall.style.left = leftValue + "%"; // increments of 13 (-5, 8, 21, 34, [47], 60, 73, 86, 99)
    blueBall.style.top = topValue + "%"; // increments of 100 (770, 670, 570, 470 , [370], 270, 170, 70, -30)
    grid.append(blueBall);   
});

// First number: Red
upArrows[0].addEventListener("click", function() {
    if(numbers[0].textContent < 4){
        numbers[0].textContent++; 
    }
});

downArrows[0].addEventListener("click", function() {
    if(numbers[0].textContent > -4){
        numbers[0].textContent--; 
    }
});

// Second number: Red
upArrows[1].addEventListener("click", function() {
    if(numbers[1].textContent < 4){
        numbers[1].textContent++; 
    }
});

downArrows[1].addEventListener("click", function() {
    if(numbers[1].textContent > -4){
        numbers[1].textContent--; 
    }
});

// Third number: Blue
upArrows[2].addEventListener("click", function() {
    if(numbers[2].textContent < 4){
        numbers[2].textContent++; 
    }
});

downArrows[2].addEventListener("click", function() {
    if(numbers[2].textContent > -4){
        numbers[2].textContent--; 
    }
});

// Fourth number: Blue
upArrows[3].addEventListener("click", function() {
    if(numbers[3].textContent < 4){
        numbers[3].textContent++; 
    }
});

downArrows[3].addEventListener("click", function() {
    if(numbers[3].textContent > -4){
        numbers[3].textContent--; 
    }
});

