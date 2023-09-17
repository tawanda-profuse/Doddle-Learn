// General_____________________________________________
var checkButton = document.getElementById('checkButton')
var solveButton = document.getElementById('solveButton')
var resetButton = document.getElementById('resetButton')

resetButton.addEventListener("click", function () {
    window.location.reload()
    // window.location.href = ""
    return false
})

function check() {
    console.log('check initiated')
}

function solve() {
    console.log('solve initiated')
}
// Bespoke functions_____________________________________
// Lines of Symmetry:
var lineVertical = document.getElementById("vertical-line")
var lineHorizontal = document.getElementById("horizontal-line")
var lineDiagonal = document.getElementById("diagonal-line")
// Toggle buttons:
var button1 = document.getElementById("button-1")
var button1Circle = document.querySelector("#button-1 ellipse")
var button2 = document.getElementById("button-2")
var button2Circle = document.querySelector("#button-2 ellipse")
var button3 = document.getElementById("button-3")
var button3Circle = document.querySelector("#button-3 ellipse")
var button4 = document.getElementById("button-4")
var button4Circle = document.querySelector("#button-4 ellipse")
// Symmetrical shape:
var SymmetricalShape = document.getElementById("symmetrical-shape")
// Draggable points:
var draggablePoints = document.querySelectorAll(".draggable-points")
// SVG boundary:
var vector = document.querySelector("svg")

// Event listeners:
button1.addEventListener("click", function(){
    lineVertical.style.visibility = 'visible'
    lineDiagonal.style.visibility = 'hidden'
    lineHorizontal.style.visibility = 'hidden'
    button1Circle.style.stroke = '#ff0000'
    button2Circle.style.stroke = '#000066'
    button3Circle.style.stroke = '#000066'
    button4Circle.style.stroke = '#000066'
})
button2.addEventListener("click", function(){
    lineVertical.style.visibility = 'hidden'
    lineDiagonal.style.visibility = 'visible'
    lineHorizontal.style.visibility = 'hidden'
    button2Circle.style.stroke = '#ff0000'
    button1Circle.style.stroke = '#000066'
    button3Circle.style.stroke = '#000066'
    button4Circle.style.stroke = '#000066'
})
button3.addEventListener("click", function(){
    lineVertical.style.visibility = 'hidden'
    lineDiagonal.style.visibility = 'hidden'
    lineHorizontal.style.visibility = 'visible'
    button2Circle.style.stroke = '#000066'
    button1Circle.style.stroke = '#000066'
    button3Circle.style.stroke = '#ff0000'
    button4Circle.style.stroke = '#000066'
})
button4.addEventListener("click", function(){
    lineVertical.style.visibility = 'visible'
    lineDiagonal.style.visibility = 'hidden'
    lineHorizontal.style.visibility = 'visible'
    button2Circle.style.stroke = '#000066'
    button1Circle.style.stroke = '#000066'
    button3Circle.style.stroke = '#000066'
    button4Circle.style.stroke = '#ff0000'
})
// Utility onject variables
let mouseTracking = {
    point1: false,
    point2: false,
    point3: false,
    point4: false,
    point5: false,
    point6: false,
    point7: false,
    point8: false,
}
shapeCoordinates = {
    M: {x: 378, y: 157.5},
    L1: {x: 1013, y: 159},
    L2: {x: 1227, y: 372},
    L3: {x: 1229, y: 695},
    L4: {x: 905, y: 800},
    L5: {x: 477, y: 695},
    L6: {x: 370, y: 586},
    L7: {x: 584, y: 265},
    L8: {x: 375.51, y: 163.51}
}
// Event listeners for the objects within the SVG element:
draggablePoints[0].addEventListener("mousedown", function(){
    mouseTracking.point1 = true
})
draggablePoints[1].addEventListener("mousedown", function(){
    mouseTracking.point8 = true
})
draggablePoints[2].addEventListener("mousedown", function(){
    mouseTracking.point2 = true
})
draggablePoints[3].addEventListener("mousedown", function(){
    mouseTracking.point3 = true
})
draggablePoints[4].addEventListener("mousedown", function(){
    mouseTracking.point4 = true
})
draggablePoints[5].addEventListener("mousedown", function(){
    mouseTracking.point5 = true
})
draggablePoints[6].addEventListener("mousedown", function(){
    mouseTracking.point6 = true
})
draggablePoints[7].addEventListener("mousedown", function(){
    mouseTracking.point7 = true
})

document.addEventListener("mousemove", function(e){
    // Top left point:
    if(mouseTracking.point1 === true){
        draggablePoints[0].setAttribute("cx", e.x)
        draggablePoints[0].setAttribute("cy", e.y)
        shapeCoordinates.M.x = e.x
        shapeCoordinates.L8.x = e.x
        shapeCoordinates.M.y = e.y
        shapeCoordinates.L8.y = e.y
        SymmetricalShape.setAttribute("d", `M ${shapeCoordinates.M.x} ${shapeCoordinates.M.y} L ${shapeCoordinates.L1.x} ${shapeCoordinates.L1.y} L ${shapeCoordinates.L2.x} ${shapeCoordinates.L2.y} L ${shapeCoordinates.L3.x} ${shapeCoordinates.L3.y} L ${shapeCoordinates.L4.x} ${shapeCoordinates.L4.y} L ${shapeCoordinates.L5.x} ${shapeCoordinates.L5.y} L ${shapeCoordinates.L6.x} ${shapeCoordinates.L6.y} L ${shapeCoordinates.L7.x} ${shapeCoordinates.L7.y} L ${shapeCoordinates.L8.x} ${shapeCoordinates.L8.y}`)
    }
    // Top right point:
    if(mouseTracking.point2 === true){
        draggablePoints[2].setAttribute("cx", e.x*1.5)
        draggablePoints[2].setAttribute("cy", e.y)
        shapeCoordinates.L1.x = e.x*1.5
        shapeCoordinates.L1.y = e.y
        SymmetricalShape.setAttribute("d", `M ${shapeCoordinates.M.x} ${shapeCoordinates.M.y} L ${shapeCoordinates.L1.x} ${shapeCoordinates.L1.y} L ${shapeCoordinates.L2.x} ${shapeCoordinates.L2.y} L ${shapeCoordinates.L3.x} ${shapeCoordinates.L3.y} L ${shapeCoordinates.L4.x} ${shapeCoordinates.L4.y} L ${shapeCoordinates.L5.x} ${shapeCoordinates.L5.y} L ${shapeCoordinates.L6.x} ${shapeCoordinates.L6.y} L ${shapeCoordinates.L7.x} ${shapeCoordinates.L7.y} L ${shapeCoordinates.L8.x} ${shapeCoordinates.L8.y}`)
    }
    // Inner left point:
    if(mouseTracking.point8 === true){
        draggablePoints[1].setAttribute("cx", e.x)
        draggablePoints[1].setAttribute("cy", e.y)
        shapeCoordinates.L7.x = e.x
        shapeCoordinates.L7.y = e.y
        SymmetricalShape.setAttribute("d", `M ${shapeCoordinates.M.x} ${shapeCoordinates.M.y} L ${shapeCoordinates.L1.x} ${shapeCoordinates.L1.y} L ${shapeCoordinates.L2.x} ${shapeCoordinates.L2.y} L ${shapeCoordinates.L3.x} ${shapeCoordinates.L3.y} L ${shapeCoordinates.L4.x} ${shapeCoordinates.L4.y} L ${shapeCoordinates.L5.x} ${shapeCoordinates.L5.y} L ${shapeCoordinates.L6.x} ${shapeCoordinates.L6.y} L ${shapeCoordinates.L7.x} ${shapeCoordinates.L7.y} L ${shapeCoordinates.L8.x} ${shapeCoordinates.L8.y}`)
    }
    // Far right point:
    if(mouseTracking.point3 === true){
        draggablePoints[3].setAttribute("cx", e.x*1.5)
        draggablePoints[3].setAttribute("cy", e.y)
        shapeCoordinates.L2.x = e.x*1.5
        shapeCoordinates.L2.y = e.y
        SymmetricalShape.setAttribute("d", `M ${shapeCoordinates.M.x} ${shapeCoordinates.M.y} L ${shapeCoordinates.L1.x} ${shapeCoordinates.L1.y} L ${shapeCoordinates.L2.x} ${shapeCoordinates.L2.y} L ${shapeCoordinates.L3.x} ${shapeCoordinates.L3.y} L ${shapeCoordinates.L4.x} ${shapeCoordinates.L4.y} L ${shapeCoordinates.L5.x} ${shapeCoordinates.L5.y} L ${shapeCoordinates.L6.x} ${shapeCoordinates.L6.y} L ${shapeCoordinates.L7.x} ${shapeCoordinates.L7.y} L ${shapeCoordinates.L8.x} ${shapeCoordinates.L8.y}`)
    }
    // Bottom right point:
    if(mouseTracking.point4 === true){
        draggablePoints[4].setAttribute("cx", e.x*1.5)
        draggablePoints[4].setAttribute("cy", e.y*1.3)
        shapeCoordinates.L3.x = e.x*1.5
        shapeCoordinates.L3.y = e.y*1.3
        SymmetricalShape.setAttribute("d", `M ${shapeCoordinates.M.x} ${shapeCoordinates.M.y} L ${shapeCoordinates.L1.x} ${shapeCoordinates.L1.y} L ${shapeCoordinates.L2.x} ${shapeCoordinates.L2.y} L ${shapeCoordinates.L3.x} ${shapeCoordinates.L3.y} L ${shapeCoordinates.L4.x} ${shapeCoordinates.L4.y} L ${shapeCoordinates.L5.x} ${shapeCoordinates.L5.y} L ${shapeCoordinates.L6.x} ${shapeCoordinates.L6.y} L ${shapeCoordinates.L7.x} ${shapeCoordinates.L7.y} L ${shapeCoordinates.L8.x} ${shapeCoordinates.L8.y}`)
    }
    // Bottom point:
    if(mouseTracking.point5 === true){
        draggablePoints[5].setAttribute("cx", e.x*1.2)
        draggablePoints[5].setAttribute("cy", e.y*1.3)
        shapeCoordinates.L4.x = e.x*1.2
        shapeCoordinates.L4.y = e.y*1.3
        SymmetricalShape.setAttribute("d", `M ${shapeCoordinates.M.x} ${shapeCoordinates.M.y} L ${shapeCoordinates.L1.x} ${shapeCoordinates.L1.y} L ${shapeCoordinates.L2.x} ${shapeCoordinates.L2.y} L ${shapeCoordinates.L3.x} ${shapeCoordinates.L3.y} L ${shapeCoordinates.L4.x} ${shapeCoordinates.L4.y} L ${shapeCoordinates.L5.x} ${shapeCoordinates.L5.y} L ${shapeCoordinates.L6.x} ${shapeCoordinates.L6.y} L ${shapeCoordinates.L7.x} ${shapeCoordinates.L7.y} L ${shapeCoordinates.L8.x} ${shapeCoordinates.L8.y}`)
    }
    // Bottom left point:
    if(mouseTracking.point6 === true){
        draggablePoints[6].setAttribute("cx", e.x)
        draggablePoints[6].setAttribute("cy", e.y*1.3)
        shapeCoordinates.L5.x = e.x
        shapeCoordinates.L5.y = e.y*1.3
        SymmetricalShape.setAttribute("d", `M ${shapeCoordinates.M.x} ${shapeCoordinates.M.y} L ${shapeCoordinates.L1.x} ${shapeCoordinates.L1.y} L ${shapeCoordinates.L2.x} ${shapeCoordinates.L2.y} L ${shapeCoordinates.L3.x} ${shapeCoordinates.L3.y} L ${shapeCoordinates.L4.x} ${shapeCoordinates.L4.y} L ${shapeCoordinates.L5.x} ${shapeCoordinates.L5.y} L ${shapeCoordinates.L6.x} ${shapeCoordinates.L6.y} L ${shapeCoordinates.L7.x} ${shapeCoordinates.L7.y} L ${shapeCoordinates.L8.x} ${shapeCoordinates.L8.y}`)
    }
    // Far left point:
    if(mouseTracking.point7 === true){
        draggablePoints[7].setAttribute("cx", e.x)
        draggablePoints[7].setAttribute("cy", e.y*1.3)
        shapeCoordinates.L6.x = e.x
        shapeCoordinates.L6.y = e.y*1.3
        SymmetricalShape.setAttribute("d", `M ${shapeCoordinates.M.x} ${shapeCoordinates.M.y} L ${shapeCoordinates.L1.x} ${shapeCoordinates.L1.y} L ${shapeCoordinates.L2.x} ${shapeCoordinates.L2.y} L ${shapeCoordinates.L3.x} ${shapeCoordinates.L3.y} L ${shapeCoordinates.L4.x} ${shapeCoordinates.L4.y} L ${shapeCoordinates.L5.x} ${shapeCoordinates.L5.y} L ${shapeCoordinates.L6.x} ${shapeCoordinates.L6.y} L ${shapeCoordinates.L7.x} ${shapeCoordinates.L7.y} L ${shapeCoordinates.L8.x} ${shapeCoordinates.L8.y}`)
    }
})
document.addEventListener("mouseup", function(){
    mouseTracking.point1 = false
    mouseTracking.point2 = false
    mouseTracking.point3 = false
    mouseTracking.point4 = false
    mouseTracking.point5 = false
    mouseTracking.point6 = false
    mouseTracking.point7 = false
    mouseTracking.point8 = false
})
