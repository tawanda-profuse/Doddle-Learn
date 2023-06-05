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
let cells = document.querySelectorAll('.honeycomb-cell-content')
let questionContainer = document.querySelector("#question")
let showAnswerButton = document.getElementById('showAnswer')
let answerContent = document.querySelector('#answer')
let redPick = document.querySelector('#red')
let bluePick = document.querySelector('#blue')

let questions = [
    'What is 1<sup>3</sup><span class="division">&frasl;</span><sub>4</sub> of 8?',
    'What is 3<sup>1</sup><span class="division">&frasl;</span><sub>2</sub> of 20?',
    'What is 70 <i class="fas fa-divide"></i> 80 as a fraction in its lowest terms?',
    'What is 6<sup>1</sup><span class="division">&frasl;</span><sub>2</sub> <i class="fas fa-times"></i> 10?',
    'What is 50 <i class="fas fa-divide"></i> 200 as a fraction in its lowest terms?',
    'What is 6 <i class="fas fa-times"></i> 1<sup>1</sup><span class="division">&frasl;</span><sub>2</sub>?',
    'What is four-thirds of 15?',
    'What is 42 <i class="fas fa-times"></i> five-sixths?',
    'What is 36 <i class="fas fa-divide"></i> 72 as a fraction in its lowest terms?',
    'What is 22 <i class="fas fa-times"></i> nine-elevenths',
    'What is four-fifths of 35?',
    'What is 54 <i class="fas fa-times"></i> four-ninths?',
    'What is two-fifths of 65?',
    'What is six-fifths of 25?',
    'What is 99 <i class="fas fa-times"></i> four-elevenths?',
    'What is two-ninths <i class="fas fa-times"></i> 27?',
    'What is 3 <i class="fas fa-divide"></i> 5?',
    'What is 2<sup>1</sup><span class="division">&frasl;</span><sub>2</sub> <i class="fas fa-times"></i> 12?',
    'What is <sup>3</sup><span class="division">&frasl;</span><sub>4</sub> <i class="fas fa-times"></i> 32?',
    'What is 1<sup>1</sup><span class="division">&frasl;</span><sub>2</sub> of 18?',
    'What is 81 <i class="fas fa-times"></i> seven-ninths?',
    'What is three-tenths of 70?',
    'What is 7 <i class="fas fa-divide"></i> 8?',
    'What is one-third of 24?',
    'What is nine-tenths of 100?'
]

let answers = [
    14, 70, 'seven-eighths', 65, 'one-quarter', 9, 20, 35,
    '<sup>1</sup><span class="division">&frasl;</span><sub>2</sub>',
    18, 28, 24, 26, 30, 36, 6, 'three-fifths', 30, 24, 27, 63, 21,
    'seven-eighths', 8, 90
]

cells.forEach((cell, index) => {
    cell.addEventListener("click", function () {
        questionContainer.innerHTML = questions[index]
        answerContent.innerHTML = answers[index]
        answerContent.style.display = 'none'
    })
})

// Functions for individual cells---

// Functions for individual cells---

showAnswerButton.addEventListener("click", function () {
    answerContent.style.display = 'block'
})

function manageCells() {
    $('.honeycomb-cell-content').click(function () {
        $('.honeycomb-cell-content').css('background-color', 'plum');
        $('.honeycomb-cell-content').not(this).css('background-color', 'white');
    });
}

manageCells();