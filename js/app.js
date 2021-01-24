// The CALCULATOR

alert("Welcome to Janet's Javascript Calculator.\n\nOperations: add, subtract, multiply, divide, to the power & square root.\n\nCalculation formation: firstNumber operator secondNumber\ne.g. firstNumber * secondNumber\n\nFor square root, only the firstNumber will be used\n - leave the secondNumber as the default.\n\nLet's get calculating!");

var operator = prompt("Enter your maths function: +, -, *, /, **, sqroot", "+");

var number1 = prompt("Enter the 1st number...", "9");
var num1 = Number(number1);
console.log(num1);
// Numerical user inputs to a prompt box are treated as strings...
// need to convert to numbers.
var number2 = prompt("Enter the next number...", "2");
var num2 = Number(number2);

// show the user's calculation
// i.e. what they have typed, as there may be typos!
if(operator=='sqroot') {
    alert(`${operator}  of  ${num1}`);
} else {
    alert(`${num1} ${operator} ${num2}`);
};

// Check input is a num1 & num2 are of type number.
// typeof(num1) === 'number' not working.
// num1 is shown as NaN on the console...hence the check isNaN()
if (isNaN(num1) || isNaN(num2)) {
    alert("At least one of the inputs is NOT a number...start again!!")
} else {

    // selecting the user's operator
    if (operator == '+') {
        console.log(adding(num1, num2));
        alert("Answer = " + adding(num1, num2));
    } else if (operator == '-') {
        console.log(subtracting(num1, num2));
        alert("Answer = " + subtracting(num1, num2));
    } else if (operator == '*') {
        console.log(multiplying(num1, num2));
        alert("Answer = " + multiplying(num1, num2));
    } else if (operator == '/') {
        console.log(dividing(num1, num2));
        alert("Answer = " + dividing(num1, num2));
    } else if (operator == '**') {
        console.log(toThePower(num1, num2));
        alert("Answer = " + toThePower(num1, num2));
    } else if (operator == 'sqroot') {
        console.log(squareRooting(num1));
        alert("Answer = " + squareRooting(num1));
    } else {
        // if user doesn't use the correct operator
        alert("Invalid operator...try again!!");
    }; // end of if-else loop for operators

}; // end of if loop for NaN


/************************************************/
// ----            The FUNCTIONS          ----
/************************************************/

// Addition
function adding(num1, num2) {
    var sum = num1 + num2;
    return sum;
};

// Subtraction
function subtracting(num1, num2) {
    var subtract = num1 - num2;
    return subtract;
};


// Division
function dividing(num1, num2) {
    var divide = num1 / num2;
    return divide;
};


// Multiplication
function multiplying(num1, num2) {
    var multiply = num1 * num2;
    return multiply;
};


// Power
function toThePower(num1, num2) {
    var power = num1 ** num2;
    return power;
};


// Square Root
function squareRooting(num1) {
    var sqRoot = Math.sqrt(num1);
    // special JS maths method
    return sqRoot;
};
