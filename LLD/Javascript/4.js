// JavaScript-4: Functional Programming
// CallBack Functions
// Passing function as an argument to other function
// function printName(callBack) {
//     console.log("JK");
//     callBack();
// }

// function callBack() {
//     console.log("SZ");
// }

// printName(callBack);




// ReUsability Example
// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// function farewell(name) {
//     console.log(`Bye ${name}`);
// }

// function createSalutation(name, callBack) {
//     console.log(callBack(name));
// }

// createSalutation('KKR', greet);
// createSalutation('SRH', farewell);



// Pure and Impure Functions
// Pure Function
// function sum(a, b) {
//     return a + b;
// }

// // Same output Everytime
// console.log(sum(1, 2));
// console.log(sum(1, 2));
// console.log(sum(1, 2));
// console.log(sum(1, 2));
// console.log(sum(1, 2));

// // Impure Function
// var c = 0;
// function sum(a, b) {
//     return a + b + c++;
// }

// // Different Output Everytime
// console.log(sum(1, 2));
// console.log(sum(1, 2));
// console.log(sum(1, 2));
// console.log(sum(1, 2));
// console.log(sum(1, 2));



// 
// Higher Order Functions
// Given an array, which has radius for different circles, we need to find area, circumference, diameter for all radiuses

// function area(radius) {
//     return Math.PI * radius * radius;
// }

// function circumference(radius) {
//     return 2 * Math.PI * radius;
// }

// function diameter(radius) {
//     return 2 * radius;
// }

// function circleCalc(radius, callBack) {
//     return callBack(radius);
// }

// let radiusArray = [2, 3, 4, 7, 9];

// console.log("Radiuses are ", radiusArray);
// radiusArray.forEach((x) => {
//     console.log("x -> ", x);
//     console.log(circleCalc(x, area));
//     console.log(circleCalc(x, circumference));
//     console.log(circleCalc(x, diameter));
// }) 


// Array Methods
// Map Method
// Given an array of integers, return Square of them
// Approach-1: Loop
// console.log("----------- Map Operator -----------");
// let arr = [1, 2, 3];
// let square = [];
// arr.forEach((x) => {
//     square.push(x * x);
// })
// console.log("Array -> ", arr);
// console.log("Using Loop -> ", square);


// // Approach-2: Function
// function squareArray(arr) {
//     let squareUsingFunction = [];
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         let x = Math.pow(arr[i], 2);
//         squareUsingFunction.push(x);
//     }
//     return squareUsingFunction;
// }

// console.log("Using Function -> ", squareArray(arr));

// // Approach-3: Map Operator
// let squareUsingMap = arr.map(function(element) {
//     return element * element;
// })

// console.log("Using Map -> ", squareUsingMap);

// let squareMapInline = arr.map(element => element * element);
// console.log("Inline Map -> ", squareMapInline);


// // Convert USD to Rupees
// const usd = [100, 15000, 180];
// const conversationRatio = 84;

// let conversionUsingMap = usd.map(function(element) {
//     return element * conversationRatio;
// })

// console.log("INR Conversion Using Map -> ", conversionUsingMap);


// let conversionInline =  usd.map(element => element * conversationRatio);
// console.log("Inline Conversion -> ", conversionInline);




// Filter Method
console.log("----------- Filter Operator -----------");
// Given an array of integers, return only the even elements
console.log("----------- Even Elements -----------");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log("Array -> ", arr);

// Approach-1: Using Loop
let evenElement = [];
arr.forEach((x) => {
    if (x % 2 === 0) evenElement.push(x);
})
console.log("Using Loop -> ", evenElement);


// Approach-2: Using Filter Operator
const evenElementUsingFilter = arr.filter(function even(element) {
    return element % 2 === 0;
})

console.log("Using Filter Function -> ", evenElementUsingFilter);

const evenElementInline = arr.filter (element => element % 2 === 0);
console.log("Using Inline Filter -> ", evenElementInline);


console.log("----------- Positive Elements -----------");
arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log("Array -> ", arr);

// Approach-1: Using Loop
let positivElements = [];
arr.forEach((x) => {
    if (x > 0) positivElements.push(x);
})
console.log("Using Loop -> ", positivElements);

// Approach-2: Filter Function
let positivElementsUsingFilter = arr.filter(function(element) {
    return element > 0;
})

console.log("Using Filter Function -> ", positivElementsUsingFilter);


let positivElementsInline = arr.filter(element => element > 0);
console.log("Using Inline Filter -> ", positivElementsInline);

