// Function Declaration
function sayHi() {
    console.log("Hello JK");
}


// sayHi();    // Function Calling Function


// Function as Expression 
let sayHiFromFunction = function() {
    console.log("Return sayHI from this function");
    return sayHi();
}

sayHiFromFunction();

// Assign function as a variable
let sum = function(a, b) {
    return a + b;
}

console.log(sum(4, 5));
console.log(sum(14, 51), "sum function from a variable");


// Passed as a parameter
let product = function(func, x) {
    return sum(a, b) * x;
}



// console.log(product(sum(5, 4)), 5);
    


// Return Function from a Function

function subract(a, b) {
    return a - b;
}


let minus = function(x, y) {
    return subract(x, y);   // Return Subract Function
};

console.log(minus(5, 4));



// Hoisting
console.log(message); // Undefined
var message = "Hello";

console.log(greet);
function greet() {
    console.log(`${message} from Greet`); // Hello from Greet
}

greet();



// Arrow Functions
let jk = (a, b) => {
    return a + b;
}

console.log(jk(5,44));
console.log(jk(10, 15));

