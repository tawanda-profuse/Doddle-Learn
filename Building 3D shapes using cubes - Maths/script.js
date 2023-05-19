// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var startButton = document.getElementById('startButton');
var startPanel = document.getElementById('startPanel');

function hideHelp() {
    var x = document.getElementById("help-text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function resetAll() {
    window.location.reload();
    // window.location.href = "";
    return false;
}

function check() {
    console.log('check initiated');
}

function solve() {
    console.log('solve initiated');
}

function start() {
    startPanel.style.display = 'none';
    startButton.style.display = 'none';
}
// Bespoke functions_____________________________________

var cube = document.querySelector('.cube'); // The original cube
var playGround = document.querySelector('.play-ground'); // The grand-parent container
var container = document.querySelector('.container'); // the parent container
var colorPalette = document.querySelector('.color-palette'); // Color option picker
var colorOptions = document.querySelectorAll('.color-palette input'); // Color option picker

// Function below allows the color checkboxes to be enabled one at a time
function manageCheckBoxes() {
    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
            $('input[type="checkbox"]').not(this).prop('checked', false);
        }
    });
}
manageCheckBoxes();

function changeCubeColor(colorOptions, colorPalette) {
    colorOptions.forEach(item => {
        if (item.checked == true) {
            colorPalette.dataset.color = item.name;
        }
    });
}

container.addEventListener("click", function (e) {
    changeCubeColor(colorOptions, colorPalette);
    if (colorPalette.dataset.color != 'eraser') {
        // Creating a cube
        var newCube = document.createElement('figure');
        var boundary = e.target.getBoundingClientRect();
        var mouseX = e.clientX - boundary.left;
        var mouseY = e.clientY - boundary.top;
        newCube.innerHTML = `<div class="front" style="background: ${colorPalette.dataset.color};"><i class="fas fa-circle"></i></div>
    <div class="left" style="background: ${colorPalette.dataset.color};"><i class="fas fa-circle"></i></div>
    <div class="right" style="background: ${colorPalette.dataset.color};"><i class="fas fa-circle"></i></div>
    <div class="top" style="background: ${colorPalette.dataset.color};"><i class="fas fa-circle"></i></div>
    <div class="bottom" style="background: ${colorPalette.dataset.color};"><i class="fas fa-circle"></i></div>
    <div class="back" style="background: ${colorPalette.dataset.color};"><i class="fas fa-circle"></i></div>`;
        newCube.style.position = "absolute";
        newCube.style.left = mouseX + "px";
        newCube.style.top = mouseY + "px";
        newCube.classList.add("cube");
        container.append(newCube);
    } else if (colorPalette.dataset.color = 'eraser') {
        removeCube();
    }
});

function removeCube() {
    let allCubes = document.querySelectorAll("figure.cube");
    allCubes.forEach(item => {
        item.addEventListener("click", function () {
            this.remove(this);
        })
    });
}


