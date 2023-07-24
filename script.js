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