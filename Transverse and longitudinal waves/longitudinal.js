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
var xStep = 20
var A = 1 * xStep //{Amplitude} as a fraction of xStep
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
  showTime(Math.floor(t) % 12, Math.floor(10 * t) % 10)
}

function drawCurve(t) {
  var stringPath = ' '
  var o2 = document.getElementById('curve_2') // each white ball with pink border
  for (var i = -Xpx_max / xStep; i < Xpx_max / xStep; i++) {
    x1 = i * xStep - xStep / 2
    x = x1 - DCoff - A * Math.sin(kpi * x1 - omega * t)
    y = 0
    stringPath = stringPath + ' M ' + x + ' ' + y + 'a 8 8 0 1 1 16 0 a 8 8 0 1 1 -16 0'; //+ xStep/2;
  }
  o2.setAttributeNS(null, 'd', stringPath);
}

function showTime(a, b) {
  var CLCK = document.getElementById('time')
  var nT = document.createTextNode(a + '.' + b + ' s')
  // CLCK.replaceChild(nT, CLCK.firstChild)
}

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

function adjustAmpUnits(amp) {

    if (amp.value == 10) {
      xStep = 21
    } else if (amp.value == 20) {
      xStep = 20
    } else if (amp.value == 30) {
      xStep = 19
    } else if (amp.value == 40) {
      xStep = 18
    } else if (amp.value == 50) {
      xStep = 17
    } else if (amp.value == 60) {
      xStep = 16
    } else if (amp.value == 70) {
      xStep = 15
    } else if (amp.value == 80) {
      xStep = 14
    } else if (amp.value == 90) {
      xStep = 13
    } else if (amp.value == 100) {
      xStep = 12
    } else if (amp.value == 120) {
      xStep = 11
    } else if (amp.value == 130) {
      xStep = 10
    }
  }

  function adjustWLUnits(waveLength){
    if(waveLength.value == 100){
      xStep = 8
    } else if(waveLength.value == 150){
      xStep = 10
    } else if(waveLength.value == 200){
      xStep = 12
    } else if(waveLength.value == 250){
      xStep = 14
    } else if(waveLength.value == 350){
      xStep = 16
    } else if(waveLength.value == 400){
      xStep = 18
    } else if(waveLength.value == 450){
      xStep = 22
    } else if(waveLength.value == 500){
      xStep = 24
    } else if(waveLength.value == 550){
      xStep = 26
    } else if(waveLength.value == 600){
      xStep = 28
    } else if(waveLength.value == 650){
      xStep = 30
    } else if(waveLength.value == 700){
      xStep = 32
    }
  }

  function adjustFUnits(f){
    if(f.value == 0){
      clearInterval(timer);
    } else if(f.value == 0.05){
      cps = 1200 / delay
    } else if(f.value == 0.1){
      cps = 1000 / delay
    } else if(f.value == 0.15){
      cps = 850 / delay
    } else if(f.value == 0.2){
      cps = 800 / delay
    } else if(f.value == 0.25){
      cps = 750 / delay
    } else if(f.value == 0.3){
      cps = 700 / delay
    } else if(f.value == 0.35){
      cps = 650 / delay
    } else if(f.value == 0.4){
      cps = 600 / delay
    } else if(f.value == 0.45){
      cps = 550 / delay
    } else if(f.value == 0.5){
      cps = 500 / delay
    } else if(f.value == 0.55){
      cps = 450 / delay
    } else if(f.value == 0.6){
      cps = 400 / delay
    } else if(f.value == 0.65){
      cps = 350 / delay
    } else if(f.value == 0.7){
      cps = 300 / delay
    } else if(f.value == 0.75){
      cps = 450 / delay
    } else if(f.value == 0.8){
      cps = 400 / delay
    } else if(f.value == 0.85){
      cps = 350 / delay
    } else if(f.value == 0.9){
      cps = 300 / delay
    } else if(f.value == 0.95){
      cps = 250 / delay
    } else if(f.value == 0.1){
      cps = 200 / delay
    }
  }

  function adjustUnits(){
    amplitude.addEventListener("input", function(){
      adjustAmpUnits(amplitude);
    });

    waveLength.addEventListener("input", function(){
      adjustWLUnits(waveLength);
    });
    
    frequency.addEventListener("input", function(){
      adjustFUnits(frequency);
    });

  }

  adjustUnits();


