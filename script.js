// JavaScript (script.js)
let resultValue = 0; // Store the intermediate result
let currentOperator = ''; // Store the current operator
let waitingForOperand = false; // Flag to track if we're waiting for the next operand

function appendToInput(value) {
  const input = document.getElementById('result');

  if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
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
  } 
  else if (currentOperator === '%') {
    resultValue = inputValue/100;
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

// Function to handle keyboard input
function handleKeyPress(event) {
  const keyValue = event.key;
  const input = document.getElementById('result');
  
  // Check if the key pressed is a number, operator, or other key
  if (/^[0-9]$/.test(keyValue)) {
    // If the key is a number, call the appendToInput function with the corresponding number
    appendToInput(Number(keyValue));
  } else if (keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
    // If the key is an operator, call the appendToInput function with the corresponding operator
    appendToInput(keyValue);
  } else if (keyValue === '.' || keyValue === ',') {
    // If the key is a decimal point, call the appendToInput function with a decimal point
    appendToInput('.');
  } else if (keyValue === 'Enter' || keyValue === '=') {
    // If the key is the Enter key or equal sign, call the calculateResult function
    calculateResult();
  } else if (keyValue === 'Backspace') {
    // If the key is the Backspace key, remove the last character from the input
    input.value = input.value.slice(0, -1);
  } else if (keyValue === 'c' || keyValue === 'C') {
    // If the key is the "C" or "c" key, clear the input
    input.value = '';
  }
}

// Add event listener to the document to listen for keypress events
document.addEventListener('keypress', handleKeyPress);

function toggleSign() {
  const input = document.getElementById('result');
  const currentValue = parseFloat(input.value);
  const newValue = -currentValue;
  input.value = newValue.toString();
}

// Function to handle keydown event
function handleKeyDown(event) {
  const keyElement = document.querySelector(`button[value="${event.key}"]`);
  if (keyElement) {
    keyElement.classList.add('active');
  }
}

// Function to handle keyup event
function handleKeyUp(event) {
  const keyElement = document.querySelector(`button[value="${event.key}"]`);
  if (keyElement) {
    keyElement.classList.remove('active');
  }
}

// Add event listeners for keydown and keyup events on the document
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
