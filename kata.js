$(document).ready(function() {

var firstNumber = ""  
var operator = ""

firstVariable()

// Displays numbers used for first variable 
function firstVariable(){
  document.onkeyup = function (event) { 
    if (event.key >= 0) { 
      firstNumber += event.key
      console.log(event.key)
      document.getElementById('first-number').innerHTML = firstNumber;
    } // Displays operator when pressed
    else if (event.key === "+"){
      operator = event.key
      console.log(event.key)
      document.getElementById('operator').innerHTML = operator
    }
  }
}


});