// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var startButton = document.getElementById('startButton');
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
var utils = {
  timestamp: function () {
    return window.performance && window.performance.now
      ? window.performance.now()
      : new Date().getTime();
  },
  getCanvasContext: function () {
    return $(".js-canvas")[0].getContext("2d");
  },
  calculateCartesian: function (r, theta) {
    var x = r * Math.cos(theta);
    var y = r * Math.sin(theta);
    return {
      x: x,
      y: y,
    };
  },
  calculatePolar: function (x, y) {
    var r = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);
    var theta = Math.atan2(y, x);

    return {
      magnitude: r,
      angle: theta,
    };
  },
};

var $canvas = $(".js-canvas");
(ctx = utils.getCanvasContext()),
  (canvasWidth = $canvas.width()),
  (canvasHeight = $canvas.height());

var space = 20,
  i,
  thickSpace = 100;

var offsetX = $canvas.width() / 2;
var offsetY = $canvas.height() / 2;

var center = {
  x: offsetX,
  y: offsetY,
};

var mouse = {
  x: 0,
  y: 0,
};

let mouseTracking = {
  down: false,
  client: null,
};

// Function below is executed when the mouse is pressed down
$canvas.on("mousedown", function (ev) { 
  mouseTracking = {
    down: true,
    client: { x: ev.pageX, y: ev.pageY },
  };
});

// Function below is executed when the mouse is dragged
$canvas.on("mousemove", function (ev) {
  if (mouseTracking.down) {
    mouse.x = ev.pageX - $canvas.offset().left;
    mouse.y = ev.pageY - $canvas.offset().top;
  }
});

// Function below is executed when the mouse click ends
  $canvas.on("mouseup", () => {
  mouseTracking = {
    down: false,
    client: null,
  };
});

// Draggable circle:
var drawItem = function (item) {
  var x = item.x;
  var y = item.y;

  // Draggable circle
  ctx.beginPath();

  ctx.moveTo(x, y);
  ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "#FF0000";
  ctx.lineWidth = 2;
  ctx.fill();

  ctx.stroke();
  // Draggable circle: End
};

var polar = function (r, theta) {
  return {
    magnitude: r,
    angle: theta,
  };
};

// General variables
var hLength,
  vLength,
  dLength,
  p,
  midpoint,
  quartpoint,
  offsetPos,
  offsetPosP,
  offsetmidpointP,
  angle,
  arcAngleStart,
  arcCCW;

var drawMouseLines = function () {
  // Text color for numbers
  ctx.beginPath();
  ctx.fillStyle = "navy";
  ctx.fill();
  ctx.stroke();

  // Red lines for angles
  ctx.beginPath();
  ctx.strokeStyle = "#FF0000";
  ctx.lineWidth = 3;
  ctx.font = "20px Arial";

  hLength = mouse.x - center.x;
  vLength = center.y - mouse.y;
  dLength = Math.sqrt(Math.pow(hLength, 2) + Math.pow(vLength, 2));

  // Horizontal line.
  ctx.moveTo(center.x, center.y);
  ctx.lineTo(mouse.x, center.y);
  ctx.fillText(
    Math.abs(Math.floor(hLength)),
    mouse.x + (center.x - mouse.x) / 2 - 10,
    center.y - 5
  );

  // Vertical line.
  ctx.moveTo(mouse.x, center.y);
  ctx.lineTo(mouse.x, mouse.y);
  ctx.fillText(
    Math.abs(Math.floor(vLength)),
    mouse.x + 5,
    center.y + (mouse.y - center.y) / 2
  );

  // Diagonal line.
  ctx.moveTo(center.x, center.y);
  ctx.lineTo(mouse.x, mouse.y);

  p = utils.calculatePolar(hLength, vLength);

  midpoint = utils.calculateCartesian(p.magnitude / 2, p.angle);
  quartpoint = utils.calculateCartesian(p.magnitude / 4, p.angle);

  ctx.fillText(
    dLength.toFixed(2),
    midpoint.x + offsetX + 10,
    -midpoint.y + offsetY
  );

  ctx.moveTo(center.x, center.y);

  angle = Math.atan2(-midpoint.y, midpoint.x);

  // Top right.
  if (angle <= 0 && angle > -Math.PI / 2) {
    arcAngleStart = 0;
    arcCCW = true;

    offsetPos = polar(-5, p.angle - Math.PI / 2);
  }
  // Top left.
  else if (angle <= -Math.PI / 2 && angle >= -Math.PI) {
    arcCCW = false;
    if (angle == -Math.PI) {
      arcAngleStart = -Math.PI;
    } else {
      arcAngleStart = Math.PI;
    }

    offsetPos = polar(5, p.angle - Math.PI / 2);
  }
  // Bottom right.
  else if (angle > 0 && angle < Math.PI / 2) {
    arcAngleStart = 0;
    arcCCW = false;

    offsetPos = polar(5, p.angle - Math.PI / 2);
  }
  // Bottom left.
  else if (angle > Math.PI / 2 && angle <= Math.PI) {
    arcAngleStart = Math.PI;
    arcCCW = true;

    offsetPos = polar(-5, p.angle - Math.PI / 2);
  } else {
    offsetPos = polar(0, 0);
  }

  offsetPosP = utils.calculateCartesian(offsetPos.magnitude, offsetPos.angle);
  offsetmidpointP = {
    x: midpoint.x + offsetPosP.x,
    y: midpoint.y + offsetPosP.y,
  };

  ctx.arc(center.x, center.y, p.magnitude / 4, arcAngleStart, angle, arcCCW);

  ctx.stroke();
};

var mouse = {
  update: function () {},
  render: function () {
    // Draw center;
    drawMouseLines();
    drawItem(center); // circle at the center

    ctx.beginPath();
    ctx.strokeStyle = "navy";
    ctx.moveTo(offsetPosP.x + offsetX, -offsetPosP.y + offsetY);
    ctx.lineTo(offsetmidpointP.x + offsetX, -offsetmidpointP.y + offsetY);
    ctx.stroke();

    drawItem(mouse); // draggable circle at the corner
  },
};

var grid = {
  draw: function () {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 1;
    for (i = space; i < canvasWidth; i += space) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvasHeight);
    }
    for (i = space; i < canvasHeight; i += space) {
      ctx.moveTo(0, i);
      ctx.lineTo(canvasWidth, i);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 2;
    for (i = thickSpace; i < canvasWidth; i += thickSpace) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvasHeight);
    }
    for (i = thickSpace; i < canvasHeight; i += thickSpace) {
      ctx.moveTo(0, i);
      ctx.lineTo(canvasWidth, i);
    }
    ctx.stroke();
  },
};

var game = {
  init: function () {},
  update: function () {
    mouse.update();
  },
  render: function () {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    grid.draw();
    mouse.render();
  },
};

$(function () {
  game.init();

  var now,
    dt = 0,
    last = utils.timestamp(),
    slow = 1, // slow motion scaling factor
    step = 1 / 60,
    slowStep = slow * step,
    update = game.update,
    render = game.render;
  // fpsmeter = new FPSMeter({ decimals: 0, graph: true, theme: 'dark', left: '5px' });

  function frame() {
    // fpsmeter.tickStart();
    now = utils.timestamp();
    dt = dt + Math.min(1, (now - last) / 1000);
    while (dt > slowStep) {
      dt = dt - slowStep;
      update(step);
    }
    render(dt / slow);
    last = now;
    // fpsmeter.tick();
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
});

var videoDemo = document.getElementById("videoDemo");
var implement = document.getElementById("implement");
var gradientArea = document.querySelector(".gradient-area");
var videoArea = document.querySelector('.video-area');

videoDemo.addEventListener("click", function(){
  videoArea.style.display = 'block';
  gradientArea.style.display = 'none';
});

implement.addEventListener("click", function(){
  videoArea.style.display = 'none';
  gradientArea.style.display = 'block';
});
