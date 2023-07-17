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

// startButton.addEventListener("click", function () {
//     startPanel.style.display = 'none';
//     startButton.style.display = 'none';
// })
// Bespoke functions_____________________________________
var display = document.querySelector(".display");
var numbers = document.querySelectorAll(".inputs");
var clear = document.querySelector(".clear");
var equals = document.querySelector(".equals");

var expression = '';
display.textContent = '0';

var germanNumbers = [
    // 1
    'null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 
    // 10
    'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn',
    // 20
    'zwanzig', 'einundzwanzig', 'zweiundzwanzig', 'dreiundzwanzig', 'vierundzwanzig', 'fünfundzwanzig', 'sechsundzwanzig', 'siebenundzwanzig', 'achtundzwanzig', 'neunundzwanzig', 
    // 30
    'dreißig', 'einunddreißig', 'zweiunddreißig', 'dreiunddreißig', 'vierunddreißig', 'fünfunddreißig', 'sechsunddreißig', 'siebenunddreißig', 'achtunddreißig', 'neununddreißig', 
    // 40
    'vierzig', 'einundvierzig', 'zweiundvierzig', 'dreiundvierzig', 'vierundvierzig', 'fünfundvierzig', 'sechsundvierzig', 'siebenundvierzig', 'achtundvierzig', 'neunundvierzig', 
    // 50
    'fünfzig', 'einundfünfzig', 'zweiundfünfzig', 'dreiundfünfzig', 'vierundfünfzig', 'fünfundfünfzig', 'sechsundfünfzig', 'siebenundfünfzig', 'achtundfünfzig', 'neunundfünfzig', 
    // 60
    'sechzig', 'einundsechzig', 'zweiundsechzig', 'dreiundsechzig', 'vierundsechzig', 'fünfundsechzig', 'sechsundsechzig', 'siebenundsechzig', 'achtundsechzig', 'neunundsechzig', 
    // 70
    'siebzig', 'einundsiebzig', 'zweiundsiebzig', 'dreiundsiebzig', 'vierundsiebzig', 'fünfundsiebzig', 'sechsundsiebzig', 'siebenundsiebzig', 'achtundsiebzig', 'neunundsiebzig', 
    // 80
    'achtzig', 'einundachtzig', 'zweiundachtzig', 'dreiundachtzig', 'vierundachtzig', 'fünfundachtzig', 'sechsundachtzig', 'siebenundachtzig', 'achtundachtzig', 'neunundachtzig', 
    // 90
    'neunzig', 'einundneunzig', 'zweiundneunzig', 'dreiundneunzig', 'vierundneunzig', 'fünfundneunzig', 'sechsundneunzig', 'siebenundneunzig', 'achtundneunzig', 'neunundneunzig', 'hundert'
];

numbers.forEach((item) => {
    item.addEventListener("click", function (e) {
        let eventTarget = e.target;
        expression += eventTarget.textContent;
        display.textContent = expression;
    });
});

clear.addEventListener("click", function () {
    expression = '';
    display.textContent = '0';
});

equals.addEventListener("click", function () { 
    let result = eval(expression)   
    
    if (result <= 100) {
        display.innerHTML = germanNumbers[result];
        if(result < 0){
            display.innerHTML = 'weniger als null';
        }
    } else if(result > 100) {
        display.innerHTML = 'mehr als hundert';
    } 
});