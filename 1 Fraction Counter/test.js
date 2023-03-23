var stepSizeNumerator = document.getElementById("numeratorI"); // Displayed value of numerator
var stepSizeDenominator = document.getElementById("denominatorI"); // Displayed value of denominator
var topNum = document.getElementById("numerator");
var divider = document.getElementById("divider");
var bottomNum = document.getElementById("denominator");

function checkFraction(){
    var sSn = parseInt(stepSizeNumerator.innerHTML);
    var sSd = parseInt(stepSizeDenominator.innerHTML);
    function processFraction(){
      if (sSd>=sSn){
        if (sSd%sSn == 0){
          topNum.innerHTML = sSn/sSn;
          divider.innerText = '/'
          bottomNum.innerHTML = sSd/sSn;
        }
      } else if(sSn>sSd){
        if (sSn%sSd == 0){
          topNum.innerHTML = sSn/sSd;
          divider.innerText = '/'
          bottomNum.innerHTML = sSd/sSd;
        }
      }
    }
    if(sSd%2 == 0 && sSn%2 == 0){
      sSd = sSd/2;
      sSn = sSn/2;
      processFraction();
    }else if(sSd%3==0 && sSn%3 == 0){
      sSd = sSd/3;
      sSn = sSn/3;
      processFraction();
    } else {
      rotateArmClockwise();
    }
  
  }