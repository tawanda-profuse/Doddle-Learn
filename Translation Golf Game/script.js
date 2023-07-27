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
const ball = Matter.Bodies.circle(Math.random() * 1000, Math.random() * 500, 12);
let flag = Bodies.circle(450, 50, 17, {
    render: {
        sprite: {
            texture: 'images/flagtrans.gif'
        }
    }}
);
const static = {isStatic: true}
const topWall = Matter.Bodies.rectangle(200, -25, 400, 50, static)
const rightWall = Matter.Bodies.rectangle(window.innerWidth, 300, 50, 800, static)
const bottomWall = Matter.Bodies.rectangle(200, 625, 400, 50, static)
const leftWall = Matter.Bodies.rectangle(-25, 300, 50, 600, static)
const bodies = [ball, flag, bottomWall, topWall, leftWall, rightWall]

bodies.forEach(body => body.restitution = 0.8)

const engine = Matter.Engine.create()
const world = engine.world
world.gravity.y = 0
Matter.Engine.run(engine)
Matter.World.add(world, bodies)

var rightInput = document.getElementById("right");
var upInput = document.getElementById("up");
var goButton = document.getElementById("goBtn");
var strokeMeter = document.getElementById("strokes");
var winMessage = document.querySelector(".win-message");
var result = document.getElementById("result");
var golfCourse = document.querySelector(".golf-course");

let counter = 0;
let courseWidth = golfCourse.getBoundingClientRect().width;
let courseHeight = golfCourse.getBoundingClientRect().height;
console.log(courseWidth, courseHeight);

function setup() {
  createCanvas(courseWidth, courseHeight)
}

function draw() {
  background(color('#119D0A'))

  // Patch around the hole
  fill(color(3, 190, 29))
  circle(200, 180, 150) // posX, posY, R

  // Hole
  fill(0)
  circle(200, 180, 30)

  // flag
//   circle(flag.position.x, flag.position.y, flag.circleRadius)
  
  // Ball
  fill(255)
  circle(ball.position.x, ball.position.y, ball.circleRadius * 2)
  checkIfWin()
}

function checkIfWin() {
  if (distanceBetween(ball.position, {x: 200, y: 180}) < 20 && ball.speed < 1.8) {  
    winMessage.style.display = 'block';
    result.textContent = counter;
    goButton.style.visibility = 'hidden';
    ball.circleRadius = 0;
  }
}

goButton.addEventListener("click", function() {
  const movePosition = {x: rightInput.value * courseWidth, y: -upInput.value * courseHeight}

  const distance = distanceBetween(ball.position, movePosition)
  const angle = Matter.Vector.angle(ball.position, movePosition)
  const forceMultiplier = distance / courseWidth;
  const force = 0.002 * forceMultiplier > 0.02 ? 0.02 : 0.002 * forceMultiplier

  Matter.Body.applyForce(ball, ball.position, {
    x: cos(angle) * force,
    y: sin(angle) * force
  });

  counter++;
  strokeMeter.textContent = counter;
})

function distanceBetween(vectorA, vectorB) {
  // Pythagorean theorem time!
  return Math.sqrt(Math.pow(vectorA.x - vectorB.x, 2) + Math.pow(vectorA.y - vectorB.y, 2))
}
