// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var resetButton = document.getElementById('resetButton');

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
var turtle = document.querySelector(".turtle");
var treeDistance = document.getElementById("treeDistance");
var treePlantDistance = document.getElementById("treePlantDistance");
var fenceDistance = document.getElementById("fenceDistance");

window.addEventListener("load", function(){
   turtle.style.backgroundImage = 'url(images/turtle-closed.png)'; 
});

treeDistance.addEventListener("click", function(){
    turtle.style.backgroundImage = 'url(images/turtle.png)'; 
    turtle.classList.add("rotate-around-tree");
    turtle.classList.remove("stay-equally");
    turtle.classList.remove("move-along");
});

treePlantDistance.addEventListener("click", function(){
    turtle.style.backgroundImage = 'url(images/turtle.png)';
    turtle.classList.add("stay-equally");
    turtle.classList.remove("rotate-around-tree");
    turtle.classList.remove("move-along");
});

fenceDistance.addEventListener("click", function(){
    turtle.style.backgroundImage = 'url(images/turtle.png)';  
    turtle.classList.add("move-along");
    turtle.classList.remove("stay-equally");
    turtle.classList.remove("rotate-around-tree");
});