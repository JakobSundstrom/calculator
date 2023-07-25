const add = function (...args) {
    return args.reduce((acc, val) => acc + val, 0);
  };
  
  const subtract = function (...args) {
    return args.reduce((acc, val) => acc - val);
  };
  
  const multiply = function (...args) {
    return args.reduce((acc, val) => acc * val, 1);
  };
  
  const divide = function (...args) {
    return args.reduce((acc, val) => acc / val);
  };

  const operate = function(a,b,operator){
    if (operator === "+"){
        return add(a,b);
    };

    if (operator === "-"){
        return subtract(a,b);
    };

    if (operator === "*"){
        return multiply(a,b);
    };

    if (operator === "/"){
        return divide(a,b);
    };
   };

console.log(operate(1,4,"/"));

function appendToInput(value) {
    var input = document.getElementById("result");
    input.value += value;
};

function clearInput() {
  var input = document.getElementById("result");
  input.value = "";
}

function calculateResult() {
  const inputField = document.getElementById("result");
  const expression = inputField.value;

  // Regular expression to split the expression into numbers and operators
  const tokens = expression.split(/(\+|\-|\*|\/)/).filter(token => token.trim() !== '');

  // Create two arrays to store numbers and operators separately
  const numbers = [];
  const operators = [];

  console.log("Tokens:", tokens);

  for (const token of tokens) {
    if (!isNaN(parseFloat(token))) {
      numbers.push(parseFloat(token));
      console.log("Number Stack:", numbers);
    } else {
      while (
        operators.length > 0 &&
        precedence(token) <= precedence(operators[operators.length - 1])
      ) {
        applyOperation(numbers, operators);
        console.log("Number Stack:", numbers);
      }
      operators.push(token);
      console.log("Operator Stack:", operators);
    }
  }

  while (operators.length > 0) {
    applyOperation(numbers, operators);
    console.log("Number Stack:", numbers);
  }

  const result = numbers[0];
  inputField.value = result;
  console.log("Result:", result);
}

function precedence(operator) {
  if (operator === '+' || operator === '-') {
    return 1;
  } else if (operator === '*' || operator === '/') {
    return 2;
  } else {
    return 0;
  }
}

function applyOperation(numbers, operators) {
  const operator = operators.pop();
  const b = numbers.pop();
  const a = numbers.pop();
  const result = operate(a, b, operator);
  numbers.push(result);
}
