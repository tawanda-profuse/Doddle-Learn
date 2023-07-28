// General_____________________________________________
var checkButton = document.getElementById("checkButton");
var solveButton = document.getElementById("solveButton");
var startButton = document.getElementById("startButton");
var resetButton = document.getElementById("resetButton");
var startPanel = document.getElementById("startPanel");

resetButton.addEventListener("click", function () {
  window.location.reload();
  return false;
});

function check() {
  console.log("check initiated");
}

function solve() {
  console.log("solve initiated");
}
// Bespoke functions_____________________________________
var golfCourse = document.querySelector(".golf-course");
let courseWidth = golfCourse.getBoundingClientRect().width;
let courseHeight = golfCourse.getBoundingClientRect().height;
let randomX = (Math.random() * (800 - 200) + 200);
let randomY = (Math.random() * (400 - 100) + 100);
// Patch around the hole
const patch = Matter.Bodies.circle(
  randomX,
  randomY,
  75,
  {
    isStatic: true,
    render: {
      fillStyle: "rgb(3, 190, 29)",
    },
    collisionFilter: {
      group: -1,
      category: 2,
      mask: 0,
    },
  }
);

// Flag
const flag = Matter.Bodies.circle(randomX+90, randomY-90, 17, {
  isStatic: true,
  render: {
      sprite: {
          texture: 'images/flagtrans.gif'
      },
      collisionFilter: {
        group: 2,
        category: 2,
        mask: 0,
      },
  }}
);

// Hole
const hole = Matter.Bodies.circle(
  randomX,
  randomY,
  15,
  {
    isStatic: true,
    render: {
      fillStyle: "#000",
    },
    collisionFilter: {
      group: -1,
      category: 2,
      mask: 0,
    },
  }
);

// Ball
const ball = Matter.Bodies.circle(
  Math.random() * 1000,
  Math.random() * 500,
  12,
  {
    render: {
      strokeStyle: "black",
      lineWidth: 3,
      fillStyle: "#ffffff",
    },
  }
);

const static = {
  isStatic: true,
};
const topWall = Matter.Bodies.rectangle(
  0,
  0,
  courseWidth * 2,
  25,
  {
    render: {
      fillStyle: "#119D0A",
    },
  },
  static
);

const rightWall = Matter.Bodies.rectangle(
  courseWidth,
  300,
  25,
  courseHeight,
  {
    render: {
      fillStyle: "#119D0A",
    },
  },
  static
);

const bottomWall = Matter.Bodies.rectangle(
  0,
  courseHeight,
  courseWidth * 2,
  25,
  {
    render: {
      fillStyle: "#119D0A",
    },
  },
  static
);

const leftWall = Matter.Bodies.rectangle(
  0,
  300,
  25,
  courseHeight,
  {
    render: {
      fillStyle: "#119D0A",
    },
  },
  static
);

const bodies = [bottomWall, topWall, leftWall, rightWall, patch, hole, ball, flag];

bodies.forEach((body) => (body.restitution = 0.8));

const Engine = Matter.Engine;
const Render = Matter.Render;
const Runner = Matter.Runner;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;

var engine = Engine.create();
var render = Render.create({
  element: golfCourse,
  engine: engine,
  options: {
    width: courseWidth,
    height: courseHeight,
    wireframes: false,
    pixelRatio: 1,
    background: "#119D0A",
  },
});

Composite.add(engine.world, bodies);
engine.world.gravity.y = 0;
Render.run(render);
var runner = Runner.create();
Runner.run(runner, engine);

var rightInput = document.getElementById("right");
var upInput = document.getElementById("up");
var goButton = document.getElementById("goBtn");
var strokeMeter = document.getElementById("strokes");
var winMessage = document.querySelector(".win-message");
var result = document.getElementById("result");

let counter = 0;

function checkIfWin() {
  if (distanceBetween(ball.position, hole.position) < 20 && ball.speed < 1.8) {
    winMessage.style.display = "block";
    result.textContent = counter;
    goButton.style.visibility = "hidden";
    ball.render.visible = false;
  }
}

Matter.Events.on(engine, 'afterUpdate', function(){
  checkIfWin();
})

goButton.addEventListener("click", function () {
  const movePosition = {
    x: rightInput.value * courseWidth,
    y: -upInput.value * courseHeight,
  };

  const distance = distanceBetween(ball.position, movePosition);
  const angle = Matter.Vector.angle(ball.position, movePosition);
  const forceMultiplier = distance / 2000 + 1;
  const force = 0.002 * forceMultiplier > 0.02 ? 0.02 : 0.002 * forceMultiplier;

  Matter.Body.applyForce(ball, ball.position, {
    x: Math.cos(angle) * force,
    y: Math.sin(angle) * force,
  });

  counter++;
  strokeMeter.textContent = counter;
});

function distanceBetween(vectorA, vectorB) {
  // Pythagorean theorem time!
  return Math.sqrt(
    Math.pow(vectorA.x - vectorB.x, 2) + Math.pow(vectorA.y - vectorB.y, 2)
  );
}
