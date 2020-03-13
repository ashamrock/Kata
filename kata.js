$(document).ready(function() {

var firstNumber = ""  

firstVariable()

// displays numbers used for first variable 
function firstVariable(){
  document.onkeyup = function (event) { 
    if (event.key >= 0) { 
      firstNumber += event.key
      document.getElementById('first-number').innerHTML = firstNumber;
    } 
  }
}


});