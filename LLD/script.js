// Variables in Javascript

// Memory space in the system to store values
// Dynamically Typed Language or Loosely Typed Language
// 1. Var

var a = true;
console.log("a ->", a);

a = 5;
console.log("a ->", a);

a = 'Hi';
console.log("a ->", a);


// Drawback of Var : It allow redeclaration of a variable which cannot define its origin
// This is why "Let" and "Const" are used since they does not allow redeclaration



// With "Let", Redeclaration is not possible but Reinitialization can be done
let city = 'Hyderabad';
console.log("city ->", city);


// Try uncommenting this -> Redeclaration (Will throw error)
// let city = "Vijayawada"; 
// console.log("city ->", city);

city = "Vijayawada"  // Reinitialization
console.log("city ->", city);



// With "Const", Redeclaration and Reinitialization is not possible
const pi = 3.14;
console.log("PI -> ", pi);


// Uncomment this and execute code.
// pi = 5;
// console.log("PI -> ", pi);







