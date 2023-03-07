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
// Hide/Show Grid function
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