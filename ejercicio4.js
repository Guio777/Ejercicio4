// Define numbers
const num1 = 10;
const num2 = 5;

// Traditional function declarations for basic arithmetic operations
function add(a, b) {
    return a + b; 
}

function subtract(a, b) {
    return a - b; 
}

function multiply(a, b) {
  return a * b; 
}

function divide(a, b) {
    return a / b; 
}

// Call functions
const sumResult = add(num1, num2);
const subtractResult = subtract(num1, num2);
const multiplyResult = multiply(num1, num2);
const divideResult = divide(num1, num2);

// Display results with template literals
console.log(`The result of ${num1} + ${num2} is ${sumResult}`);       
console.log(`The result of ${num1} - ${num2} is ${subtractResult}`); 
console.log(`The result of ${num1} * ${num2} is ${multiplyResult}`); 
console.log(`The result of ${num1} / ${num2} is ${divideResult}`);   


const addArrow = (a, b) => a + b;           
const subtractArrow = (a, b) => a - b;
const multiplyArrow = (a, b) => a * b;
const divideArrow = (a, b) => a / b;

// Simple validation example for division
const safeDivide = (a, b) => {
    if (b === 0) {
    return "Error: division by zero is not allowed.";
    }
    return a / b;
};

const result = safeDivide(num1, num2);
console.log(`The result of ${num1} / ${num2} is ${result}`); 

