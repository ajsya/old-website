function add() {
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);
  if (number1 === "NaN" || number2 === "NaN") {
    document.getElementById("answer").innerHTML = "You must be Ben, you forgot to enter a number!"
  }
  else {
    var number = (number1 + number2);
    if (number1 < number2) {
      var output = (number + number1);
    }
    if (number2 < number1) {
      var output = (number + number2);
    }
    if (number1 == number2) {
      var output = (number + number2);
    }
    document.getElementById("answer").innerHTML = "The answer to " + number1 + " plus " + number2 + " is, " + output + " in Derp Math."; 
  }
}

function subtract() {
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);
  if (number1 === "NaN" || number2 === "NaN") {
    document.getElementById("answer").innerHTML = "You must be Ben, you forgot to enter a number!"
  }
  else {
    var number = (number1 - number2);
    if (number1 < number2) {
      var output = (number - number1);
    }
    if (number2 < number1) {
      var output = (number - number2);
    }
    if (number1 == number2) {
      var output = (number - number2);
    }
    document.getElementById("answer").innerHTML = "The answer to " + number1 + " minus " + number2 + " is, " + output + " in Derp Math.";
  }
}

function multiply() {
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);
  if (number1 === "NaN" || number2 === "NaN") {
    document.getElementById("answer").innerHTML = "You must be Ben, you forgot to enter a number!"
  }
  else {
    var number = (number1 * number2);
    if (number1 < number2) {
      var output = (number * number1);
    }
    if (number2 < number1) {
      var output = (number * number2);
    }
    if (number1 == number2) {
      var output = (number * number2);
    }
    document.getElementById("answer").innerHTML = "The answer to " + number1 + " times " + number2 + " is, " + output + " in Derp Math."; 
  }
}
