$(document).ready(function() {

var firstNumber = ""  
var operator = ""
var secondNumber = ""
var solution = ""

firstVariable()

// Displays numbers used for first variable 
function firstVariable(){
  document.onkeyup = function (event) { 
    if (event.key >= 0) { 
      firstNumber += event.key
      if (firstNumber > 999) {
        firstNumber = ""
      }
      document.getElementById('first-number').innerHTML = firstNumber;
    } else if (event.key === "*"||"/"||"+"||"-"||"x"){
      operator = event.key
      if (operator === "Enter") { 
        operator = "+"
      }
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
      if (secondNumber > 999) {
        secondNumber = ""
      }
      document.getElementById('second-number').innerHTML = secondNumber;
    } else if (event.key === "Enter" || "="){
      total()
    }
  }
}

// Solves firstNumber and secondNumber based on operator selected
function total(){
  if (operator === "*"||"x") { 
    solution = parseInt(firstNumber) * parseInt(secondNumber)
  }
  if (operator === "/") { 
    solution = parseInt(firstNumber) / parseInt(secondNumber)
  }
  if (operator === "+") { 
    solution = parseInt(firstNumber) + parseInt(secondNumber)
  }
  if (operator === "-") { 
    solution = parseInt(firstNumber) - parseInt(secondNumber)
  }
  if (firstNumber === "" || secondNumber === ""){
    solution = 0
  }
  document.getElementById('solution').innerHTML = solution;
  resetFunction()
}

// Resets everything to null and starts functions over
function resetFunction(){
  firstNumber = ""  
  operator = ""
  secondNumber = ""
  solution = ""
firstVariable()
}


});