var hiddenNums = document.querySelectorAll('.invisible');
var visibleNums = document.querySelectorAll('.visible');
var testV = document.getElementById('test');

window.addEventListener("load", function () {
    hiddenNums.forEach(number => {
        number.textContent = ''
    });
})

visibleNums.forEach(number => {
    number.addEventListener("click", function (evt) {
        const eventTarget = evt.target;
        if(eventTarget.textContent.length > 0){
            eventTarget.textContent = ''
        } else {
            eventTarget.textContentw
        }
    })
});

// In progress
hiddenNums.forEach(number => {
    number.addEventListener("click", function (evt) {
        const eventTarget = evt.target;
        if(eventTarget.textContent == ''){
            eventTarget.textContent.initial
        } else {
            eventTarget.textContent = '';
        }
    })
})



