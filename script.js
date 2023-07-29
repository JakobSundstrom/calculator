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
  } else {
    // If no operator is set, update the resultValue to the current input value
    resultValue = inputValue;
  }

  const roundedResult = roundToMaxDecimalPlaces(resultValue, 10); // Round the result to fit the input box
  inputField.value = roundedResult; // Display the updated result in the input field

  // After the result is calculated and displayed, reset the operator to allow continuous calculations
  currentOperator = '';
  waitingForOperand = false;
}

function calculatePercentage() {
  const inputField = document.getElementById('result');
  const inputValue = parseFloat(inputField.value) || 0; // Convert the current input value to a number or use 0 if it's not a number

  // Calculate the percentage operation (divide by 100) and display the result as a decimal
  const result = inputValue *0.01;
  const roundedResult = roundToMaxDecimalPlaces(result, 10); // Round the result to fit the input box
  inputField.value = roundedResult; // Display the updated result in the input field
}

// Function to round a number to the maximum decimal places that fit the input box width
function roundToMaxDecimalPlaces(number, maxDecimalPlaces) {
  const scaleFactor = Math.pow(10, maxDecimalPlaces);
  const roundedNumber = Math.round(number * scaleFactor) / scaleFactor;
  const roundedString = roundedNumber.toString();

  // Remove trailing zeros from the decimal part, if any
  const decimalIndex = roundedString.indexOf('.');
  if (decimalIndex !== -1) {
    const integerPart = roundedString.slice(0, decimalIndex);
    let decimalPart = roundedString.slice(decimalIndex + 1);

    // Remove trailing zeros from the decimal part
    decimalPart = decimalPart.replace(/0+$/, '');

    // If the decimal part is empty after removing zeros, display the integer part only
    return decimalPart.length > 0 ? `${integerPart}.${decimalPart}` : integerPart;
  }

  return roundedString; // If no decimal part, return the original rounded number as a string
}



function clearInput() {
  const input = document.getElementById('result');
  input.value = ''; // Clear the input field
  roundedResult = 0;
  resultValue = 0;
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
