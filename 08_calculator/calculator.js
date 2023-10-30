const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	/* const sum = arr.reduce((accumulator, currentValue) =>  {
     return accumulator + currentValue
  }, 0);
  return sum; */
  const initialValue = 0;
  return arr.reduce((product, currentValue) => product + currentValue, initialValue);
};

const multiply = function(arr) {
  return arr.reduce((product, currentValue) => product * currentValue);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }	
  return product;
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
