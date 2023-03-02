var stepSize = document.getElementById('stepSize');
var showCover = document.getElementById('showCover');

stepSize.addEventListener('click', function(){
  stepSize.classList.add('hide');
});

showCover.addEventListener('click', function(){
  stepSize.classList.remove('hide');
});
