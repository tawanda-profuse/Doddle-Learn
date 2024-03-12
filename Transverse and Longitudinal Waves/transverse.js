var Ymax = 50 //{Ymax}
var Xmax = 0.5 //{Xmax}

var Ymin = -Ymax
var Ypx_max = 150
var Xpx_max = 500

var pi = Math.PI
var tpi = 0.9 * pi
var N = 5 / 2 // {Number} of half-cycles per graph
var kpi = (N * tpi) / Xpx_max // angular wave number
var phase = -tpi / 1 //{Phase} as a fraction of 2pi
var DCoff = 0.0 * Ypx_max // d.c. {OffSet}

var timer
var delay = 20 //in ms
var cps = 1000 / delay // anim intervals per second
var count = 0
var countOld = 0
var toggle = false
var xStep = 16
var A = 1.8 * xStep //{Amplitude} as a fraction of xStep
var period = 2 //{T} in ds;
var omega = tpi / period // angular frequency
// Range input values
var amplitude = document.getElementById('amplitude');
var waveLength = document.getElementById('wave-length');
var frequency = document.getElementById('frequency');

function init() {
  count = countOld
  timer = setInterval(doAnim, delay);
}

function doAnim() {
  count += 1
  t = count / cps
  drawCurve(t)
}

function drawCurve(t) {
  var stringPath = ' '
  var o2 = document.getElementById('curve_2') // white balls with pink border
  for (var i = -Xpx_max / xStep; i < Xpx_max / xStep; i++) {
    x1 = i * xStep - xStep / 2
    x = x1 - DCoff - A
    y1 = i * xStep - xStep / 2
    y = DCoff - A * Math.sin(kpi * y1 - omega * t)
    stringPath = stringPath + ' M ' + x + ' ' + y + 'a 8 8 0 1 1 16 0 a 8 8 0 1 1 -16 0'; //+ xStep/2;
  }
  o2.setAttributeNS(null, 'd', stringPath);
}

// The function below manages pause/play state of the animation
function renew() {
  toggle ^= true;
  countOld = count

  if (toggle) {
    startButton.textContent = 'start'
    clearInterval(timer)
  } else {
    startButton.textContent = 'stop'
    init()
  }
}

// The function below changes the color of the ball in the waves
function changeBalls() {
  var balls = document.getElementsByClassName('ball');
  for (var i = 0; i < balls.length; i++) {
    balls[i].setAttribute('onclick', 'changeColor(this)');
  }
}

function changeColor(ball) {
  ball.classList.toggle('change-color');
}

changeBalls();

// The function below adjusts the amplitude of the transverse waves
function adjustAmpUnits(amp) {

  if (amp.value == 0) {
    DCoff, A = 0
  } else {
    DCoff = 0.0 * Ypx_max;
    if (amp.value == 10) {
      A = 1 * xStep
    } else if (amp.value == 20) {
      A = 1.8 * xStep
    } else if (amp.value == 30) {
      A = 2 * xStep
    } else if (amp.value == 40) {
      A = 2.2 * xStep
    } else if (amp.value == 50) {
      A = 2.4 * xStep
    } else if (amp.value == 60) {
      A = 2.6 * xStep
    } else if (amp.value == 70) {
      A = 2.8 * xStep
    } else if (amp.value == 80) {
      A = 3 * xStep
    } else if (amp.value == 90) {
      A = 3.2 * xStep
    } else if (amp.value == 100) {
      A = 5 * xStep
    } else if (amp.value == 120) {
      A = 5.5 * xStep
    } else if (amp.value == 130) {
      A = 6 * xStep
    }
  }
}

// The function below adjusts the wave length of the transverse waves
function adjustWLUnits(waveLength) {
  if (waveLength.value == 100) {
    Xpx_max = 350
  } else if (waveLength.value == 150) {
    Xpx_max = 400
  } else if (waveLength.value == 200) {
    Xpx_max = 410
  } else if (waveLength.value == 250) {
    Xpx_max = 430
  } else if (waveLength.value == 300) {
    Xpx_max = 450
  } else if (waveLength.value == 350) {
    Xpx_max = 500
  } else if (waveLength.value == 400) {
    Xpx_max = 520
  } else if (waveLength.value == 450) {
    Xpx_max = 530
  } else if (waveLength.value == 500) {
    Xpx_max = 540
  } else if (waveLength.value == 550) {
    Xpx_max = 550
  } else if (waveLength.value == 600) {
    Xpx_max = 560
  } else if (waveLength.value == 650) {
    Xpx_max = 570
  } else if (waveLength.value == 700) {
    Xpx_max = 600
  }
}

// The function below adjusts the frequency of the transverse waves
function adjustFUnits(f) {
  if (f.value == 0) {
    omega = 0
  } else {
    omega = tpi / period
    if (f.value == 0.05) {
      cps = 1100 / delay
    } else if (f.value == 0.1) {
      cps = 1000 / delay
    } else if (f.value == 0.15) {
      cps = 950 / delay
    } else if (f.value == 0.2) {
      cps = 900 / delay
    } else if (f.value == 0.25) {
      cps = 850 / delay
    } else if (f.value == 0.3) {
      cps = 800 / delay
    } else if (f.value == 0.35) {
      cps = 750 / delay
    } else if (f.value == 0.4) {
      cps = 700 / delay
    } else if (f.value == 0.45) {
      cps = 650 / delay
    } else if (f.value == 0.5) {
      cps = 600 / delay
    } else if (f.value == 0.55) {
      cps = 550 / delay
    } else if (f.value == 0.6) {
      cps = 500 / delay
    } else if (f.value == 0.65) {
      cps = 450 / delay
    } else if (f.value == 0.7) {
      cps = 400 / delay
    } else if (f.value == 0.75) {
      cps = 350 / delay
    } else if (f.value == 0.8) {
      cps = 300 / delay
    } else if (f.value == 0.85) {
      cps = 250 / delay
    } else if (f.value == 0.9) {
      cps = 200 / delay
    } else if (f.value == 0.95) {
      cps = 150 / delay
    } else if (f.value == 1) {
      cps = 100 / delay
    }
  }
}

// Function below manages changes in frequency, amplitude and wave length by using recursion
function adjustUnits() {
  amplitude.addEventListener("input", function () {
    adjustAmpUnits(amplitude);
  });

  waveLength.addEventListener("input", function () {
    adjustWLUnits(waveLength);
  });

  frequency.addEventListener("input", function () {
    adjustFUnits(frequency);
  });

}

adjustUnits();


