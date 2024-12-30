// The feature where we can access variables and function even before they are declared is called hoisting
// Only variables with var keyword can be accessed

// console.log(msg);  // Undefined - msg not declared
// var msg = "Hi";

// greet(); // Hi I am BB

// function greet() {
//   // let msg = "Hello";
//   console.log(msg, "Inside Greet"); 
// }


// // Hoisting doesn't work for Arrow functions
// console.log(x);  // Doesn't work here

// var x = (a, b) => { 
//   return a + b; 
// };

// console.log(x(1,21));


/*

console.log(msg); //ReferenceError: Cannot access 'msg' before initialization
let/const msg = "Hi";

function greet() {
  console.log(msg, "I am JK");
}

greet();

Output: ReferenceError: Cannot access 'msg' before initialization
*/


console.log(foo); // Function foo

var foo = "Hello";


// This function is hoisted at the top
function foo() { 
  console.log("Function foo");
}

console.log(foo);  // Hello