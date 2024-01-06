function evaluate(expression) {
  return Function('"use strict";return (' + expression + ")")();
}

// Helper function to perform actual arithmetic operations
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "x":
      return a * b;
    case "÷":
      if (b === 0) {
        throw "Division by zero error";
      }
      return a / b;
    default:
      return null;
  }
}
let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "DEL":
        //removing last character from display screen
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = evaluate(display.innerText);
        } catch {
          display.innerText = "error";
        }

        break;
      default:
        display.textContent += e.target.innerText;
    }
  });
});
