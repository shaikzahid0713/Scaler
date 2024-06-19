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




// Data Type in JavaScript
// 1. Primitive
// 2. Reference


// Primitive 
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol



// Reference
// 1. Function
// 2. Array
// 3. Object



console.log('Data Types');
// Primitive
// Numbers
let aa = 1;
console.log('aa -> ', aa);

// Decimal
aa = 0.121212;
console.log('aa -> ', aa);


aa = -102.2;
console.log('aa -> ', aa);

// Undefined 
aa = 2/0;
console.log('aa -> ', aa);

// Not a Number
aa = "hello"/ 0;
console.log('aa -> ', aa);


// Strings
aa = "Data Type is String"
console.log('aa -> ', aa);

aa = 'JS';
console.log('aa -> ', aa);



// Strings with Variables
let message = 'This is a ' + aa + " file.";
console.log("Message -> ", message);

// Inside backtick(`), ${variable_name}
message = `This is a ${aa} file.`;
console.log("Message -> ", message);


// Boolean
let isMay = true;
console.log("Is this May? ", isMay);

isMay = false;
console.log("Is this May? ", isMay);


// Undefined - This happens when memory is allocated but no value is set for the variable
let course;
console.log("Course -> ", course);


// Null -> Value for the variable DO NOT EXIST (Nothing or Empty)
let marks = null;
console.log("Marks -> ", marks);


// Reference Types
// Functions
// function_declaration function_name(parameters) {
//     function_body;
// }

function sum(a, b) {
    return a + b;
}

console.log("Sum -> ", sum(4, 5));


// Arrays
// Collection of heterogenous elements
// Index starts from 0 to length - 1
let arr = [1, 2.5, "HI", true, [2, 3, 4]];
console.log("Array -> ", arr);


// Array Methods
console.log("Length of Array -> ", arr.length);

// Add Elements at End
arr.push(false);
console.log("Array -> ", arr);


// Delete an Element from end
arr.pop();
console.log("Array -> ", arr);



// Add Elements at Beginning -> Unshift
arr.unshift(0.5);
console.log("Array -> ", arr);

// Delete from Start
arr.shift();
console.log("Array -> ", arr);
