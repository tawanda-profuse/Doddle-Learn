var cube = document.querySelector('.cube'); // The original cube
var playGround = document.querySelector('.play-ground'); // The grand-parent container
var container = document.querySelector('.container'); // the parent container
var colorPalette = document.querySelector('.color-palette input'); // Color option picker

container.addEventListener("click", function (e) {
    var newCube = document.createElement('figure');
    var boundary = e.target.getBoundingClientRect();
    var mouseX = e.clientX - boundary.left;
    var mouseY = e.clientY - boundary.top;
    newCube.innerHTML = `<div class="front" style="background: ${colorPalette.value};"><i class="fas fa-circle"></i></div>
    <div class="left" style="background: ${colorPalette.value};"><i class="fas fa-circle"></i></div>
    <div class="right" style="background: ${colorPalette.value};"><i class="fas fa-circle"></i></div>
    <div class="top" style="background: ${colorPalette.value};"><i class="fas fa-circle"></i></div>
    <div class="bottom" style="background: ${colorPalette.value};"><i class="fas fa-circle"></i></div>
    <div class="back" style="background: ${colorPalette.value};"><i class="fas fa-circle"></i></div>`;
    newCube.style.position = "absolute";
    newCube.style.left = mouseX + "px";
    newCube.style.top = mouseY + "px";
    newCube.classList.add("cube");
    container.append(newCube);
});