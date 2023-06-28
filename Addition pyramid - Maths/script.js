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
let three = document.getElementById("three");
let four = document.getElementById("four");
let fourthRow = document.querySelector(".row:nth-child(4)");
let notelets = document.querySelectorAll(".notelet");
// Random numbers for multiplication
let addend1 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend2 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend3 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend4 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend5 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend6 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend7 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend8 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend9 = (Math.random() * (20 - 1) + 1).toFixed(0);
let addend10 = (Math.random() * (20 - 1) + 1).toFixed(0);

// CLicking on the number three
three.addEventListener("click", function () {
    fourthRow.style.display = 'none';
    four.style.borderColor = 'navy'
    three.style.borderColor = 'red'
    clear();
});

// CLicking on the number four
four.addEventListener("click", function () {
    fourthRow.style.display = 'flex';
    four.style.borderColor = 'red';
    three.style.borderColor = 'navy';
    
});

// Cover the numbers with notelets:
function clear() {
    notelets.forEach((item, i) => {
        if(item.classList.contains("notelet-white")){
            item.classList.remove("notelet-white");
            item.textContent = '';
        }
    })
}

notelets[0].addEventListener("click", function () {
    notelets[0].classList.toggle("notelet-white");
    if (notelets[0].classList.contains("notelet-white")) {
        notelets[0].textContent = Number(addend7) + Number(addend8) + Number(addend8) + Number(addend9) + Number(addend8) + Number(addend9) + Number(addend9) + Number(addend10);
    } else {
        notelets[0].textContent = ''
    }
});

notelets[1].addEventListener("click", function () {
    notelets[1].classList.toggle("notelet-white");
    if (notelets[1].classList.contains("notelet-white")) {
        notelets[1].textContent = Number(addend7) + Number(addend8) + Number(addend8) + Number(addend9);
    } else {
        notelets[1].textContent = ''
    }
});

notelets[2].addEventListener("click", function () {
    notelets[2].classList.toggle("notelet-white");
    if (notelets[2].classList.contains("notelet-white")) {
        notelets[2].textContent = Number(addend8) + Number(addend9) + Number(addend9) + Number(addend10);
    } else {
        notelets[2].textContent = ''
    }
});

notelets[3].addEventListener("click", function () {
    notelets[3].classList.toggle("notelet-white");
    if (notelets[3].classList.contains("notelet-white")) {
        notelets[3].textContent = Number(addend7) + Number(addend8);
    } else {
        notelets[3].textContent = ''
    }
});

notelets[4].addEventListener("click", function () {
    notelets[4].classList.toggle("notelet-white");
    if (notelets[4].classList.contains("notelet-white")) {
        notelets[4].textContent = Number(addend8) + Number(addend9);
    } else {
        notelets[4].textContent = ''
    }
});

notelets[5].addEventListener("click", function () {
    notelets[5].classList.toggle("notelet-white");
    if (notelets[5].classList.contains("notelet-white")) {
        notelets[5].textContent = Number(addend9) + Number(addend10);
    } else {
        notelets[5].textContent = ''
    }
});

notelets[6].addEventListener("click", function () {
    notelets[6].classList.toggle("notelet-white");
    if (notelets[6].classList.contains("notelet-white")) {
        notelets[6].textContent = addend7;
    } else {
        notelets[6].textContent = ''
    }
});

notelets[7].addEventListener("click", function () {
    notelets[7].classList.toggle("notelet-white");
    if (notelets[7].classList.contains("notelet-white")) {
        notelets[7].textContent = addend8;
    } else {
        notelets[7].textContent = ''
    }
});

notelets[8].addEventListener("click", function () {
    notelets[8].classList.toggle("notelet-white");
    if (notelets[8].classList.contains("notelet-white")) {
        notelets[8].textContent = addend9;
    } else {
        notelets[8].textContent = ''
    }
});

notelets[9].addEventListener("click", function () {
    notelets[9].classList.toggle("notelet-white");
    if (notelets[9].classList.contains("notelet-white")) {
        notelets[9].textContent = addend10;
    } else {
        notelets[9].textContent = ''
    }
});








