// General_____________________________________________
var checkButton = document.getElementById('checkButton')
var solveButton = document.getElementById('solveButton')
var startButton = document.getElementById('startButton')
var waveBackground = document.getElementById('waveBackground')
var toggle = false;
var amplitudeValue = document.getElementById('amplitude-v');
var amplitude = document.getElementById('amplitude');
var waveLength = document.getElementById('wave-length');
var waveValue = document.getElementById('wavel-v');
var frequency = document.getElementById('frequency');
var frequencyValue = document.getElementById('frequency-v');
var balls = document.querySelectorAll('.box')

function hideHelp() {
  var x = document.getElementById('help-text')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

function resetAll() {
  window.location.href = "Transverse and longitudinal waves.html";
  return false;
}

function solve() {
  console.log('solve initiated')
}


function start() {
  toggle ^= true;

  if (toggle) {
    startButton.textContent = 'start'
    balls.forEach(ball => {
      ball.style.setProperty("animation-duration", "0s");
    });
  } else {
    startButton.textContent = 'stop'
    balls.forEach(ball => {
      ball.style.setProperty("animation-duration", "2s");
    });
  }
}

// Bespoke functions below this line:
// Function for changing the color of the elements in the wave
function changeBalls() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].setAttribute('onclick', 'changeColor(this)');
  }
}

// Callback function
function changeColor(ball) {
  ball.classList.toggle('change-color')
}

changeBalls();

// Hide/Show Grid
function displayGrid(gridToggle) {
  if (gridToggle.checked) {
    waveBackground.style.backgroundImage = "url('/images/graphblank.png')";
  } else {
    waveBackground.style.backgroundImage = "url('/images/graph2.png')";
  }
}

// Function for displaying amplitude, wave length and frequency values
function displayUnits() {

  amplitudeValue.textContent = amplitude.value;
  waveValue.textContent = waveLength.value;
  frequencyValue.textContent = frequency.value;

  amplitude.addEventListener('input', function (e) {
    amplitudeValue.textContent = amplitude.value;
    // an amplitude of 0 stops the animation
    adjustAmplitude(amplitude.value, balls);
  });

  waveLength.addEventListener('input', function (e) {
    waveValue.textContent = waveLength.value;
    adjustWaveLength(waveLength.value, balls)
  });

  frequency.addEventListener('input', function (e) {
    frequencyValue.textContent = frequency.value;
    // frequency equal to zero stops the animation
    adjustFrequency(frequency.value, balls);
  });

}

displayUnits();

// Function for adjusting wave frequency
function adjustFrequency(value, elements) {
  var duration

  if (value == 0) {
    elements.forEach(element => {
      element.style.setProperty("animation-duration", "0s");
    });
  } else if (value == 0.05) {
    duration = 2.5
  } else if (value == 0.1) {
    duration = 2.4
  } else if (value == 0.15) {
    duration = 2.3
  } else if (value == 0.2) {
    duration = 2.2
  } else if (value == 0.15) {
    duration = 2.1
  } else if (value == 0.25) {
    duration = 2
  } else if (value == 0.3) {
    duration = 1.9
  } else if (value == 0.35) {
    duration = 1.8
  } else if (value == 0.4) {
    duration = 1.7
  } else if (value == 0.45) {
    duration = 1.6
  } else if (value == 0.5) {
    duration = 1.5
  } else if (value == 0.55) {
    duration = 1.4
  } else if (value == 0.6) {
    duration = 1.3
  } else if (value == 0.65) {
    duration = 1.2
  } else if (value == 0.7) {
    duration = 1.1
  } else if (value == 0.75) {
    duration = 1
  } else if (value == 0.8) {
    duration = 0.9
  } else if (value == 0.85) {
    duration = 0.8
  } else if (value == 0.9) {
    duration = 0.7
  } else if (value == 0.95) {
    duration = 0.6
  } else if (value == 1) {
    duration = 0.5
  }

  elements.forEach(element => {
    element.style.setProperty("animation-duration", `${duration}s`);
  });
}

// Function for adjusting the amplitude of waves
function adjustAmplitude(value, elements) {

  const ballMovement = [
    {
      top: '22vh',
    },
    {
      top: '18vh', offset: 0.5
    },
    {
      top: '22vh',
    }
  ];

  const ballTiming = {
    duration: 2000,
    delay: 50,
    iterations: Infinity
  }

  // Code reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
  if (value == 0) {
    elements.forEach(element => {
      ballTiming.delay += 40;
      ballMovement[1].top = '18vh;'
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 10) {
    elements.forEach(element => {
      ballTiming.delay += 30;
      ballMovement[1].top = '19vh';
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 20) {
    elements.forEach(element => {
      ballTiming.delay += 40;
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 30) {
    elements.forEach(element => {
      ballTiming.delay += 50;
      element.style.top = '24vh';
      ballMovement[0].top = '24vh';
      ballMovement[1].top = '17vh';
      ballMovement[2].top = '24vh';
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 40) {
    elements.forEach(element => {
      ballTiming.delay += 60;
      element.style.top = '26vh';
      ballMovement[0].top = '26vh';
      ballMovement[1].top = '16vh';
      ballMovement[2].top = '26vh';
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 50) {
    elements.forEach(element => {
      ballTiming.delay += 60;
      element.style.top = '28vh';
      ballMovement[0].top = '28vh';
      ballMovement[1].top = '15vh';
      ballMovement[2].top = '28vh';
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 60) {
    elements.forEach(element => {
      ballTiming.delay += 60;
      element.style.top = '30vh';
      ballMovement[0].top = '30vh';
      ballMovement[1].top = '14vh';
      ballMovement[2].top = '30vh';
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 70) {
    elements.forEach(element => {
      ballTiming.delay += 50;
      element.style.top = '32vh';
      ballMovement[0].top = '32vh';
      ballMovement[1].top = '13vh';
      ballMovement[2].top = '32vh';
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 80) {
    elements.forEach(element => {
      ballTiming.delay += 50;
      element.style.top = '34vh';
      ballMovement[0].top = '34vh';
      ballMovement[1].top = '12vh';
      ballMovement[2].top = '34vh';
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 90) {
    elements.forEach(element => {
      ballTiming.delay += 50;
      element.style.top = '36vh';
      ballMovement[0].top = '36vh';
      ballMovement[1].top = '11vh';
      ballMovement[2].top = '36vh';
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 100) {
    elements.forEach(element => {
      ballTiming.delay += 40;
      element.style.top = '38vh';
      ballMovement[0].top = '38vh';
      ballMovement[1].top = '10vh';
      ballMovement[2].top = '38vh';
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 110) {
    elements.forEach(element => {
      ballTiming.delay += 30;
      element.style.top = '40vh';
      ballMovement[0].top = '40vh';
      ballMovement[1].top = '9vh';
      ballMovement[2].top = '40vh';
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 120) {
    elements.forEach(element => {
      ballTiming.delay += 40;
      element.style.top = '42vh';
      ballMovement[0].top = '42vh';
      ballMovement[1].top = '8vh';
      ballMovement[2].top = '42vh';
      element.animate(ballMovement, ballTiming);
    });
  } else if (value == 130) {
    elements.forEach(element => {
      ballTiming.delay += 40;
      element.style.top = '44vh';
      ballMovement[0].top = '44vh';
      ballMovement[1].top = '7vh';
      ballMovement[2].top = '44vh';
      element.animate(ballMovement, ballTiming);
    });
  }
}

function adjustWaveLength(value, elements) {

  elements.forEach(element => {
    console.log(element.attr());
  });
  
}

