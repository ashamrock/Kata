$(document).ready(function() {

var firstNumber = ""  
var operator = ""
var secondNumber = ""

firstVariable()

// Displays numbers used for first variable 
function firstVariable(){
  document.onkeyup = function (event) { 
    if (event.key >= 0) { 
      firstNumber += event.key
      document.getElementById('first-number').innerHTML = firstNumber;
    } // Displays operator when pressed
    else if (event.key === "*"||"/"||"+"||"-"){
      operator = event.key
      document.getElementById('operator').innerHTML = operator
      secondVariable()
    }
  }
}

// Displays numbers used for second variable 
function secondVariable(){
  document.onkeyup = function (event) { 
    if (event.key >= 0) { 
      secondNumber += event.key
      document.getElementById('second-number').innerHTML = secondNumber;
    }
  }
}


});