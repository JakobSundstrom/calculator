// JavaScript (script.js)
let resultValue = 0; // Store the intermediate result
let currentOperator = ''; // Store the current operator
let waitingForOperand = false; // Flag to track if we're waiting for the next operand

function appendToInput(value) {
  const input = document.getElementById('result');

  if (value === '+' || value === '-' || value === '*' || value === '/') {
    // If an operator is clicked, calculate the result and display it
    calculateResult();
    currentOperator = value;
    waitingForOperand = true;
  } else {
    if (waitingForOperand) {
      // If waiting for the next operand, clear the input field
      input.value = '';
      waitingForOperand = false;
    }
    input.value += value; // Append the clicked value to the input field
  }
}

function calculateResult() {
  const inputField = document.getElementById('result');
  const inputValue = parseFloat(inputField.value) || 0; // Convert the current input value to a number or use 0 if it's not a number

  // Perform the calculation based on the stored operator and the current and previous values
  if (currentOperator === '+') {
    resultValue += inputValue;
  } else if (currentOperator === '-') {
    resultValue -= inputValue;
  } else if (currentOperator === '*') {
    resultValue *= inputValue;
  } else if (currentOperator === '/') {
    resultValue /= inputValue;
  } else {
    // If no operator is set, update the resultValue to the current input value
    resultValue = inputValue;
  }

  inputField.value = resultValue; // Display the updated result in the input field

  // After the result is calculated and displayed, reset the operator to allow continuous calculations
  currentOperator = '';
  waitingForOperand = false;
}

function clearInput() {
  const input = document.getElementById('result');
  input.value = ''; // Clear the input field
  resultValue = 0; // Reset the stored result value
  currentOperator = ''; // Reset the current operator
  waitingForOperand = false; // Reset the waitingForOperand flag
}
