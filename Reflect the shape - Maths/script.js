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
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
const mirrorLine = canvas.width / 2;
let correctReflectedPoints = [];
let userPoints = [];
let isDrawingEnabled = true;
let correctReflectionsInARow = 0;
let totalQuestions = 0;
let startTime = Date.now();

// Timer updating every second
const timerElement = document.getElementById('timer');
setInterval(() => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    timerElement.textContent = `Time: ${elapsedTime}s`;
}, 1000);

// Draw dotted grid
for (let x = 0; x <= canvas.width; x += gridSize) {
    for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fillStyle = '#000';
        ctx.fill();
    }
}

// Draw mirror line
ctx.beginPath();
ctx.moveTo(mirrorLine, 0);
ctx.lineTo(mirrorLine, canvas.height);
ctx.strokeStyle = 'red';
ctx.stroke();

// Generate random polygon
const polygonSides = Math.floor(Math.random() * 4) + 3; // 3 to 6 sides
const polygonPoints = [];

for (let i = 0; i < polygonSides; i++) {
    const x = Math.floor(Math.random() * (mirrorLine - gridSize * 2) / gridSize) * gridSize + gridSize;
    const y = Math.floor(Math.random() * (canvas.height - gridSize * 2) / gridSize) * gridSize + gridSize;
    polygonPoints.push({ x, y });
}

// Draw polygon
ctx.beginPath();
polygonPoints.forEach((point, index) => {
    if (index === 0) {
        ctx.moveTo(point.x, point.y);
    } else {
        ctx.lineTo(point.x, point.y);
    }
});
ctx.closePath();
ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
ctx.fill();

canvas.addEventListener('click', (event) => {
    if (!isDrawingEnabled) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.round((event.clientX - rect.left) / gridSize) * gridSize;
    const y = Math.round((event.clientY - rect.top) / gridSize) * gridSize;

    if (x > mirrorLine) {
        // Check if the point already exists in userPoints
        const pointAlreadyExists = userPoints.some((point) => point.x === x && point.y === y);

        // Draw the last line to close the shape, if the first point was also clicked
        if (userPoints.length > 2 && userPoints[0].x === x && userPoints[0].y === y) {
            drawUserLine(userPoints[userPoints.length - 1], userPoints[0]);
        } else if (!pointAlreadyExists) {
            userPoints.push({ x, y });
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#000';
            ctx.fill();

            if (userPoints.length > 1) {
                ctx.beginPath();
                ctx.moveTo(userPoints[userPoints.length - 2].x, userPoints[userPoints.length - 2].y);
                ctx.lineTo(x, y);
                ctx.strokeStyle = 'black';
                ctx.stroke();
            }
        }
    }
});

function drawUserLine(startPoint, endPoint) {
    ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.strokeStyle = 'black';
    ctx.stroke();
}


function checkReflection() {
    if (!isDrawingEnabled) return;

    totalQuestions++;

    if (userPoints.length !== correctReflectedPoints.length) {
        displayResult(false);
        correctReflectionsInARow = 0;
        return;
    }

    // Sort the userPoints and correctReflectedPoints by their x and y coordinates
    const sortedUserPoints = userPoints.slice().sort((a, b) => a.x - b.x || a.y - b.y);
    const sortedCorrectReflectedPoints = correctReflectedPoints.slice().sort((a, b) => a.x - b.x || a.y - b.y);

    // Check if the sorted user points match the sorted correct reflected points
    const arePointsMatching = (points1, points2) =>
        points1.every(
            (point, index) =>
                Math.abs(point.x - points2[index].x) <= gridSize / 2 && Math.abs(point.y - points2[index].y) <= gridSize / 2
        );

    // Check all possible orderings of the user's drawn shape
    for (let i = 0; i < userPoints.length; i++) {
        const rotatedUserPoints = sortedUserPoints.slice(i).concat(sortedUserPoints.slice(0, i));
        const reversedRotatedUserPoints = rotatedUserPoints.slice().reverse();
        if (
            arePointsMatching(rotatedUserPoints, sortedCorrectReflectedPoints) ||
            arePointsMatching(reversedRotatedUserPoints, sortedCorrectReflectedPoints)
        ) {
            displayResult(true);
            return;
        }
    }

    displayResult(false);
    if (correct) {
        correctReflectionsInARow++;

        if (correctReflectionsInARow === 15) {
            const timeTaken = Math.floor((Date.now() - startTime) / 1000);
            const resultMessage = `You have correctly reflected 15 shapes in a row! It took you ${totalQuestions} questions and ${timeTaken} seconds to achieve this.`;
            alert(resultMessage);
            isDrawingEnabled = false;
        }
    } else {
        correctReflectionsInARow = 0;
    }
}


function displayResult(correct) {
    const resultElement = document.getElementById('result');
    if (correct) {
        resultElement.textContent = 'Correct reflection!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Incorrect reflection. Please try again.';
        resultElement.style.color = 'red';
    }
    resultElement.classList.add('shown'); // Add the 'shown' class
}


// Add this function to show the correct reflection
function showCorrectReflection() {
    // Remove any userPoints and clear canvas
    userPoints = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw grid, mirror line, and original polygon
    drawGrid();
    drawMirrorLine();
    drawPolygon(polygonPoints, 'rgba(0, 0, 255, 0.5)');

    // Calculate reflected points and draw reflected polygon
    const reflectedPoints = polygonPoints.map((point) => {
        return { x: mirrorLine + (mirrorLine - point.x), y: point.y };
    });
    drawPolygon(reflectedPoints, 'rgba(255, 0, 0, 0.5)');
}

// Add these utility functions for drawing the grid, mirror line, and polygons
function drawGrid() {
    for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fillStyle = '#000';
            ctx.fill();
        }
    }
}

function drawMirrorLine() {
    ctx.beginPath();
    ctx.moveTo(mirrorLine, 0);
    ctx.lineTo(mirrorLine, canvas.height);
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

function drawPolygon(points, fillStyle) {
    ctx.beginPath();
    points.forEach((point, index) => {
        if (index === 0) {
            ctx.moveTo(point.x, point.y);
        } else {
            ctx.lineTo(point.x, point.y);
        }
    });
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
}

// Call the drawGrid, drawMirrorLine, and drawPolygon functions initially
drawGrid();
drawMirrorLine();
drawPolygon(polygonPoints, 'rgba(0, 0, 255, 0.5)');

function nextQuestion() {
    // Remove any userPoints and clear canvas
    userPoints = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw grid and mirror line
    drawGrid();
    drawMirrorLine();

    // Generate a new random polygon
    const newPolygonSides = Math.floor(Math.random() * 2) + 3; // 3 to 4 sides
    const newPolygonPoints = [];

    for (let i = 0; i < newPolygonSides; i++) {
        const x = Math.floor(Math.random() * (mirrorLine - gridSize * 2) / gridSize) * gridSize + gridSize;
        const y = Math.floor(Math.random() * (canvas.height - gridSize * 2) / gridSize) * gridSize + gridSize;
        newPolygonPoints.push({ x, y });
    }

    // Update the polygonPoints variable
    polygonPoints.length = 0;
    Array.prototype.push.apply(polygonPoints, newPolygonPoints);

    // Calculate reflected points and store them in correctReflectedPoints
    correctReflectedPoints = polygonPoints.map((point) => {
        return { x: mirrorLine + (mirrorLine - point.x), y: point.y };
    });

    // Draw the new polygon
    drawPolygon(polygonPoints, 'rgba(0, 0, 255, 0.5)');

    // Clear the result text
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';
    resultElement.classList.remove('shown'); // Remove the 'shown' class
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,gu' }, 'google_translate_element');
}



