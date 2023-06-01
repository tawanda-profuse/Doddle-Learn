// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var startButton = document.getElementById('startButton');
var startPanel = document.getElementById('startPanel');

function hideHelp() {
    var x = document.getElementById("help-text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function resetAll() {
    window.location.reload();
    // window.location.href = "";
    return false;
}

function check() {
    console.log('check initiated');
}

function solve() {
    console.log('solve initiated');
}

function start() {
    startPanel.style.display = 'none';
    startButton.style.display = 'none';
}
// Bespoke functions_____________________________________
var pages = document.getElementsByClassName('page');
for(var i = 0; i < pages.length; i++)
  {
    var page = pages[i];
    if (i % 2 === 0)
      {
        page.style.zIndex = (pages.length - i);
      }
  }

document.addEventListener('DOMContentLoaded', function(){
  for(var i = 0; i < pages.length; i++)
    {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick=function()
        {
          if (this.pageNum % 2 === 0)
            {
              this.classList.remove('flipped');
              this.previousElementSibling.classList.remove('flipped');
            }
          else
            {
              this.classList.add('flipped');
              this.nextElementSibling.classList.add('flipped');
            }
         }
      }
})