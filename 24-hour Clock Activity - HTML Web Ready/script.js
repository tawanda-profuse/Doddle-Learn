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
var outPut1 = document.getElementById("output-1");
var outPut2 = document.getElementById("output-2");
var text1 = document.getElementById("text-1");
var text2 = document.getElementById("text-2");

const hands = {
  hour: document.getElementById('hour-hand'),
  minute: document.getElementById('minute-hand')
}

const handles = {
  hour: document.getElementById('hour-handle'),
  minute: document.getElementById('minute-handle')
}

let mouseTracking = {
  down: false,
  hand: null,
  client: null
}

let mouseTracking2 = {
  down: false,
  hand: null,
  client: null,
  PM_toggle: false
}

let svg = document.getElementsByTagName('svg')[0];
// handles.minute.addEventListener('pointerdown', (e) => {
// Minute hand:
hands.minute.addEventListener('pointerdown', (e) => {
  mouseTracking = {
    down: true,
    hand: hands.minute,
    client: { x: e.clientX, y: e.clientY }
  }
});

// handles.hour.addEventListener('pointerdown', (e) => {
// Hour hand:
hands.hour.addEventListener('pointerdown', (e) => {
  mouseTracking2 = {
    down: true,
    hand: hands.hour,
    client: { x: e.clientX, y: e.clientY }
  }
});

const frenchNumbers = [
    '', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt', 'vingt et un', 'vingt-deux', 'vingt-trois', 'vingt-quatre', 'vingt-cinq', 'vingt-six', 'vingt-sept', 'vingt-huit', 'vingt-neuf', 'trente', 'trente et un', 'trente-deux', 'trente-trois', 'trente-quatre', 'trente-cinq', 'trente-six', 'trente-sept', 'trente-huit', 'trente-neuf', 'quarante', 'quarante et un', 'quarante-deux', 'quarante-trois', 'quarante-quatre', 'quarante-cinq', 'quarante-six', 'quarante-sept', 'quarante-huit', 'quarante-neuf', 'cinquante', 'cinquante et un', 'cinquante-deux', 'cinquante-trois', 'cinquante-quatre', 'cinquante-cinq', 'cinquante-six', 'cinquante-sept', 'cinquante-huit', 'cinquante-neuf'
];

document.addEventListener('pointermove', (e) => {

  // Minute hand:
  if (mouseTracking.down) {
    const box = svg.getBoundingClientRect()
    const center = {
      x: box.x + (box.width / 2),
      y: box.y + (box.height / 2)
    }

    let op, adj;
    let offset = 0;
    if (e.clientX > center.x) {
      op = e.clientX - center.x;
    } else {
      op = center.x - e.clientX;
    }

    if (e.clientY > center.y) {
      adj = e.clientY - center.y;
    } else {
      adj = center.y - e.clientY;
    }

    let alpha;

    if (e.clientX >= center.x && e.clientY < center.y) {
      alpha = Math.atan(op / adj) * (360 / (2 * Math.PI))
    } else if (e.clientX >= center.x && e.clientY >= center.y) {
      alpha = 180 - Math.atan(op / adj) * (360 / (2 * Math.PI));
    } else if (e.clientX < center.x && e.clientY >= center.y) {
      alpha = 180 + Math.atan(op / adj) * (360 / (2 * Math.PI));
    } else {
      alpha = 360 - Math.atan(op / adj) * (360 / (2 * Math.PI))
    }

    outPut1.textContent = (alpha / 6) < 10 ? `0${Math.floor(alpha / 6)}` : Math.floor(alpha / 6);
    
    text2.textContent = `${frenchNumbers[Math.floor(alpha/6)]}.`;

    mouseTracking.hand.style.transform = `rotate(${alpha}deg)`
    mouseTracking.client = {
      x: e.clientX,
      y: e.clientY
    }
  } 
  // Hour hand:
  else if (mouseTracking2.down) {
    const box = svg.getBoundingClientRect()
    const center = {
      x: box.x + (box.width / 2),
      y: box.y + (box.height / 2)
    }

    let op, adj;
    let offset = 0;
    if (e.clientX > center.x) {
      op = e.clientX - center.x;
    } else {
      op = center.x - e.clientX;
    }

    if (e.clientY > center.y) {
      adj = e.clientY - center.y;
    } else {
      adj = center.y - e.clientY;
    }

    let alpha;

    if (e.clientX >= center.x && e.clientY < center.y) {
      alpha = Math.atan(op / adj) * (360 / (2 * Math.PI));
    } else if (e.clientX >= center.x && e.clientY >= center.y) {
        alpha = 180 - Math.atan(op / adj) * (360 / (2 * Math.PI));
    } else if (e.clientX < center.x && e.clientY >= center.y) {
        alpha = 180 + Math.atan(op / adj) * (360 / (2 * Math.PI));
    } else {
        alpha = 360 - Math.atan(op / adj) * (360 / (2 * Math.PI)); 
    }

    if(Math.ceil(alpha/30) === 12){
        if(mouseTracking2.PM_toggle === true){
            mouseTracking2.PM_toggle = false;
        } else {
            mouseTracking2.PM_toggle = true;
        }   
    }

    let PM = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '0']
    let PMWords = ['treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt', 'vingt et une', 'vingt-deux', 'vingt-trois', 'vingt-quatre',]
    
    if(mouseTracking2.PM_toggle){
        outPut2.textContent = PM[Math.floor(alpha/30)];
        text1.textContent = PMWords[Math.floor(alpha/30)];
    } else {
        outPut2.textContent = (alpha/30).toFixed(0);
        text1.textContent = `${frenchNumbers[(alpha/30).toFixed(0)]}`
    }
    
    mouseTracking2.hand.style.transform = `rotate(${alpha}deg)`
    mouseTracking2.client = {
      x: e.clientX,
      y: e.clientY
    }
  }
});

document.addEventListener('pointerup', (e) => {
  mouseTracking = {
    down: false,
    hand: null,
    client: null
  }

  mouseTracking2 = {
    down: false,
    hand: null,
    client: null
  }
});

// Hide/show
var showHide1 = document.getElementById("showHide1");
var number1 = document.getElementById("output-2");  
var number2 = document.getElementById("output-1");  

var showHide2 = document.getElementById("showHide2");
var text3 = document.getElementById("text-3");  

// 1st hide button
showHide1.addEventListener("click", function() {
    number1.classList.toggle("hide")
    number2.classList.toggle("hide")

    if(showHide1.textContent === 'Hide'){
        showHide1.textContent = 'Show'
    } else {
        showHide1.textContent = 'Hide'
    }
});

// 2nd hide button
showHide2.addEventListener("click", function() {
    text1.classList.toggle("hide");
    text2.classList.toggle("hide");
    text3.classList.toggle("hide");

    if(showHide2.textContent === 'Hide'){
        showHide2.textContent = 'Show'
    } else {
        showHide2.textContent = 'Hide'
    }
});