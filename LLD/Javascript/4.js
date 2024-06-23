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


// Given an array, which has radius for different circles, we need to find area, circumference, diameter for all radiuses

function area(radius) {
    return Math.PI * radius * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

function diameter(radius) {
    return 2 * radius;
}

function circleCalc(radius, callBack) {
    return callBack(radius);
}

let radiusArray = [2, 3, 4, 7, 9];

console.log("Radiuses are ", radiusArray);
radiusArray.forEach((x) => {
    console.log("x -> ", x);
    console.log(circleCalc(x, area));
    console.log(circleCalc(x, circumference));
    console.log(circleCalc(x, diameter));
}) 