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
  
    let result = parseFloat(tokens[0]); // Convert the first token to a number
    let operator = null;
  
    for (let i = 1; i < tokens.length; i++) {
      if (i % 2 === 1) {
        operator = tokens[i];
      } else {
        const nextNumber = parseFloat(tokens[i]);
  
        // Handle multiplication and division before addition and subtraction
        if (operator === "*" || operator === "/") {
          result = operate(result, nextNumber, operator);
        } else {
          // If the next operator is + or -, we update the result and operator for the next iteration
          result = operate(result, nextNumber, operator);
        }
      }
    }
  
    inputField.value = result;
    console.log(result);
  }
  
  