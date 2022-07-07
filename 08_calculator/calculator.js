const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let result = 0;
    for (let number of arr) {
      result += number;
    }
    return result;
};

const multiply = function(arr) {
  let result = 1;
    for (let number of arr) {
      result *= number;
    }
    return result;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(number) {
	result = 1;
    for (i = 1; i <= number; i++) {
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
