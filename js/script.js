/*
Create a function that takes 3 arguments
-The first and second argument will be a number
-The third argument will be a mathematical operator (+, -, *, /)

Example: If the operator  is a '+' then you will add the two numbers together and console log the sum */

// Call your function 4 times with different numbers and operators to confirm that it is working correctly 

// Create a variable that stores a DOM selector of the body
const body = document.body;
// Set the background color of the body 
body.style.backgroundColor

function calculate (num1, num2, operator) {
        console.log(num1);
        var result;

        if (operator === '+') {
                console.log(num1 + num2);
        } else if (operator === '_') {
                console.log(num1 - num2);
        } else if (operator === '*') {
                console.log(num1 * num2);
        } else if (operator === '/') {
                console.log(num1 / num2);
        }             
}



calculate(10, 20, '+');
calculate(7, 89, '_');
calculate(25, 50, '*');
calculate(9, 3, '/');


// console.log(calculate(10, 5, '+'));

//Another way to do above 

function calculate(num1, num2, operator) {
        switch(operator) {
                case '+':
                        console.log(num1 + num2);
                        break;
                case '_':
                        console.log(num1 - num2);
                        break;
                case '*':
                        console.log(num1 * num2);
                        break;
                case '/':
                        console.log(num1 / num2);
                        break;
                default:
                        console.log('You must provide a valid operator');
        }
}

function add(num1, num2) {
        return 'something else';
}

function calculate(num1, num2, operator) {
        switch(operator) {
                case '+':
                 return num1 + num2;
                case '-':
                 return num1 - num2;
                case '*':
                 return num1 * num2;
                case '/':
                 return num1 / num2;
                default:
                 return 'You must provide a valid operator';
        }
}

const sum = calculate(10, 20, '+');
console.log(sum);