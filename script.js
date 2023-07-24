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
  