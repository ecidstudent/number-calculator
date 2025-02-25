#!/usr/bin/env node
// file: calculator.js
const { add, subtract, times, divide, modulus } = require('./src/stmnts-01');
const { power } = require('./src/stmnts-02');

if (process.argv.length < 5) {
  console.error("usage: node calculator.js number operator number");
  process.exit(1);
}

const num1 = parseFloat(process.argv[2]);
const operation = (process.argv[3]).toLowerCase();
const num2 = parseFloat(process.argv[4]);

let result = `Solving ${num1} ${operation} ${num2}`;

// Implementation goes here
// if you get an error, exit with an error of 1 by calling process.exit(1);
if (isNaN(num1) || isNaN(num2)) {
  console.error("invalid number");
  process.exit(1);
}

if (operation === "add") {
  result = add(num1, num2);
}

else if (operation === "subtract") {
  result = subtract(num1, num2);
}

else if (operation === "divide") {
  if (num2 === 0) {
    console.error("invalid number");
    process.exit(1);
  }
  result = divide(num1, num2);
}

else if (operation === "times" || operation === "multiply") {
  result = times(num1, num2);
}

else if (operation === "power") {
  result = power(num1, num2);
}

else if (operation === "modulus" || operation === "remainder") {
  if (num2 === 0) {
    console.error("invalid number");
    process.exit(1);
  }
  result = modulus(num1, num2);
}

else {
  console.error("unknown operation");
  process.exit(1);
}


console.log("result: ", result);
process.exit(0);
