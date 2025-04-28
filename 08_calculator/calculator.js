const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
	
};

const factorial = function(num1) {
  if (num1 < 0) return -1; // Factorial is not defined for negative numbers
  if (num1 === 0 || num1 === 1) return 1; // Base case: 0! = 1 and 1! = 1

  let result = 1;
  for (let i = 2; i <= num1; i++) {
    result *= i;
  }
  
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
