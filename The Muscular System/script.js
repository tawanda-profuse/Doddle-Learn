// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');
var startPanel = document.getElementById('startPanel');

resetButton.addEventListener("click", function () {
    window.location.reload();
    return false;
})

function check() {
    console.log('check initiated');
}

function solve() {
    console.log('solve initiated');
}

startButton.addEventListener("click", function () {
    startPanel.style.display = 'none';
    startButton.style.display = 'none';
    instructionP.style.display = 'block';
});
// Bespoke functions_____________________________________
var toggleBody = document.querySelector(".toggle-body");
var human = document.querySelector(".human");
var frontSide = document.querySelector(".front-side");
var backSide = document.querySelector(".back-side");
var instructionP = document.querySelector(".instruction p");
var points = document.querySelectorAll(".point");
var video = document.querySelector(".video");
var nextButton = document.getElementById("next");
var winDialogue = document.querySelector(".win-dialogue");
var closeButton = document.getElementById("close");

closeButton.addEventListener("click", function(){
    winDialogue.style.display = 'none';
});

var counter = 0;
var response = '';
var win = false;
var quiz = [
   {
        question: 'Select a muscle to make the teacher extend at the ankles.',
        answer: 'calf'
    },
   {
        question: 'Select a muscle to make the teacher extend at the knees.',
        answer: 'thigh'
    },
    {
        question: 'Select a muscle to make the teacher flex at the knees.',
        answer: 'rear-thigh'
    },
    {
        question: 'Select a muscle to make the teacher abduct at the shoulders.',
        answer: 'shoulder'
    }, 
    {
        question: 'Select a muscle to make the teacher extend at the elbow.',
        answer: 'tricep'
    }, 
    {
        question: 'Select a muscle to make the teacher rotate her arms forward and adduct them.',
        answer: 'chest'
    }, 
    {
        question: 'Select a muscle to make the teacher rotate her arms behind her and adduct them.',
        answer: 'lower-back'
    },
    {
        question: 'Select a muscle to make the teacher flex at the waist.',
        answer: 'abs'
    },
    {
        question: 'Select a muscle to make the teacher extend at the hips.',
        answer: 'glutes'
    },
    {
        question: 'Select a muscle to make the teacher flex at the elbow.',
        answer: 'bicep'
    },
    {
        question: 'Select a muscle to make the teacher shrug.',
        answer: 'upper-back'
    }, 
    {
        question: '',
        answer: ''
    } 
];

instructionP.textContent = quiz[counter].question; 

function validateResponse(response, quiz){
    if(instructionP.textContent === quiz[counter].question && response === quiz[counter].answer){
        nextButton.style.visibility = 'visible';
        nextButton.textContent = 'Next';
        instructionP.textContent = "That's the one!";
        counter++;
    } else {
        nextButton.style.visibility = 'visible';
        nextButton.textContent = 'Try again';
        instructionP.textContent = "That's not quite right";
    }
    points.forEach((point) => {
        // Disable body points
        point.style.pointerEvents = 'none';
    });
}

nextButton.addEventListener("click", function(){
    video.innerHTML = `<img src="images/teacher-sitting.png" alt="A teacher sitting" />`;
    points.forEach((point) => {
        // Enable body points
        point.style.pointerEvents = 'all';
    });
    instructionP.textContent = quiz[counter].question;
    nextButton.style.visibility = 'hidden'; 

    if(counter > 10){
        win = true;
        instructionP.style.display = 'none';
        video.style.visibility = 'hidden';
        nextButton.style.visibility = 'hidden';
        winDialogue.style.display = 'flex';

        points.forEach((point) => {
            // Disable body points
            point.style.pointerEvents = 'none';
        });
    }
});

window.addEventListener("load", function () {
    backSide.style.display = 'none';
    instructionP.style.display = 'none';
});

toggleBody.addEventListener("click", function () {
    if(toggleBody.textContent === 'Show body from back'){
        toggleBody.textContent = 'Show body from front';
        human.style.backgroundImage = 'url(images/body-back.png)';
        frontSide.style.display = 'none';
        backSide.style.display = 'block';
    } else {
        toggleBody.textContent = 'Show body from back';
        human.style.backgroundImage = 'url(images/body-front.png)';
        frontSide.style.display = 'block';
        backSide.style.display = 'none';
    }
});

points.forEach((point) => {
    point.addEventListener("click", function(e) {
        e.target.style.backgroundImage = 'url(images/pin.png)';
    })
})

// Variables
// Right side:
var rightShoulder = document.getElementById("right-shoulder");
var rightChest = document.getElementById("right-chest");
var rightBicep = document.getElementById("right-bicep");
var rightThigh = document.getElementById("right-thigh");
var rightUpperBack = document.getElementById("right-upper-back");
var rightShoulderBack = document.getElementById("right-shoulder-back");
var rightTricep = document.getElementById("right-tricep");
var rightLowerBack = document.getElementById("right-lower-back");
var rightGlute = document.getElementById("right-glute");
var rightThighBack = document.getElementById("right-thigh-back");
var rightCalf = document.getElementById("right-calf");

// abs
var abs = document.getElementById("abs");

// Left side:
var leftShoulder = document.getElementById("left-shoulder");
var leftChest = document.getElementById("left-chest");
var leftBicep = document.getElementById("left-bicep");
var leftThigh = document.getElementById("left-thigh");
var leftUpperBack = document.getElementById("left-upper-back");
var leftShoulderBack = document.getElementById("left-shoulder-back");
var leftTricep = document.getElementById("left-tricep");
var leftLowerBack = document.getElementById("left-lower-back");
var leftGlute = document.getElementById("left-glute");
var leftThighBack = document.getElementById("left-thigh-back");
var leftCalf = document.getElementById("left-calf");

// Playing video:
// Right side:
rightShoulder.addEventListener("click", function() {
    video.innerHTML = `<video src="images/shoulders.mp4" autoplay></video>`;
    response = 'shoulder';
    validateResponse(response, quiz);
});

rightChest.addEventListener("click", function() {
    video.innerHTML = `<video src="images/chest.mp4" autoplay></video>`;
    response = 'chest';
    validateResponse(response, quiz);
});

rightBicep.addEventListener("click", function() {
    video.innerHTML = `<video src="images/bicep.mp4" autoplay></video>`;
    response = 'bicep';
    validateResponse(response, quiz);
});

rightThigh.addEventListener("click", function() {
    video.innerHTML = `<video src="images/thigh.mp4" autoplay></video>`;
    response = 'thigh';
    validateResponse(response, quiz);
});

rightUpperBack.addEventListener("click", function() {
    video.innerHTML = `<video src="images/upper-back.mp4" autoplay></video>`;
    response = 'upper-back';
    validateResponse(response, quiz);
});

rightShoulderBack.addEventListener("click", function() {
    video.innerHTML = `<video src="images/shoulders.mp4" autoplay></video>`;
    response = 'shoulder';
    validateResponse(response, quiz);
});

rightTricep.addEventListener("click", function() {
    video.innerHTML = `<video src="images/tricep.mp4" autoplay></video>`;
    response = 'tricep';
    validateResponse(response, quiz);
});

rightLowerBack.addEventListener("click", function() {
    video.innerHTML = `<video src="images/lower-back.mp4" autoplay></video>`;
    response = 'lower-back';
    validateResponse(response, quiz);
});

rightGlute.addEventListener("click", function() {
    video.innerHTML = `<video src="images/glute.mp4" autoplay></video>`;
    response = 'glutes';
    validateResponse(response, quiz);
});

rightThighBack.addEventListener("click", function() {
    video.innerHTML = `<video src="images/thigh-back.mp4" autoplay></video>`;
    response = 'rear-thigh';
    validateResponse(response, quiz);
});

rightCalf.addEventListener("click", function() {
    video.innerHTML = `<video src="images/calf.mp4" autoplay></video>`;
    response = 'calf';
    validateResponse(response, quiz);
});

// Abs
abs.addEventListener("click", function() {
    video.innerHTML = `<video src="images/abs.mp4" autoplay></video>`;
    response = 'abs';
    validateResponse(response, quiz);
});

// Left side:
leftShoulder.addEventListener("click", function() {
    video.innerHTML = `<video src="images/shoulders.mp4" autoplay></video>`;
    response = 'shoulder';
    validateResponse(response, quiz);
});

leftChest.addEventListener("click", function() {
    video.innerHTML = `<video src="images/chest.mp4" autoplay></video>`;
    response = 'chest';
    validateResponse(response, quiz);
});

leftBicep.addEventListener("click", function() {
    video.innerHTML = `<video src="images/bicep.mp4" autoplay></video>`;
    response = 'bicep';
    validateResponse(response, quiz);
});

leftThigh.addEventListener("click", function() {
    video.innerHTML = `<video src="images/thigh.mp4" autoplay></video>`;
    response = 'thigh';
    validateResponse(response, quiz);
});

leftUpperBack.addEventListener("click", function() {
    video.innerHTML = `<video src="images/upper-back.mp4" autoplay></video>`;
    response = 'upper-back';
    validateResponse(response, quiz);
});

leftShoulderBack.addEventListener("click", function() {
    video.innerHTML = `<video src="images/shoulders.mp4" autoplay></video>`;
    response = 'shoulder';
    validateResponse(response, quiz);
});

leftTricep.addEventListener("click", function() {
    video.innerHTML = `<video src="images/tricep.mp4" autoplay></video>`;
    response = 'tricep';
    validateResponse(response, quiz);
});

leftLowerBack.addEventListener("click", function() {
    video.innerHTML = `<video src="images/lower-back.mp4" autoplay></video>`;
    response = 'lower-back';
    validateResponse(response, quiz);
});

leftGlute.addEventListener("click", function() {
    video.innerHTML = `<video src="images/glute.mp4" autoplay></video>`;
    response = 'glute';
    validateResponse(response, quiz);
});

leftThighBack.addEventListener("click", function() {
    video.innerHTML = `<video src="images/thigh-back.mp4" autoplay></video>`;
    response = 'rear-thigh';
    validateResponse(response, quiz);
});

leftCalf.addEventListener("click", function() {
    video.innerHTML = `<video src="images/calf.mp4" autoplay></video>`;
    response = 'calf';
    validateResponse(response, quiz);
});

