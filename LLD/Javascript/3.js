// Lexical Scopes
// var a = 20;
// function parent() {
//     console.log(a);
// }

// parent();

// Here 'a' is a global variable, so parent function can access it
// Output: 20



// Parent - Child Scopes
// function parent() {
//     var a = 20; // can be accessed anywhere inside parent but not globally
//     function child() {
//         console.log(a);
//     }
//     child();
// }

// parent();
// This will provide reference error, since a is not in global scope
// console.log(a);

// Output: 20
// Here Child Function can access its parents variables



// function parent() {
//     var a = 20;
//     function child() {
//         console.log(`Child -> ${a}`);
//         function grandChild() {
//             console.log(`Grand Child -> ${a}`);
//         }
//         grandChild();
//     }
//     child();
// }

// parent();


// Output:-
// Child -> 20
// Grand Child -> 20
// Both Grand Child and Child Functions can access Parent functions variable

// function parent() {
//     function child() {
//         console.log(a);
//         function grandChild() {
//             console.log(`Grand Child -> ${a}`);
//         }
//         grandChild();
//     }
//     child();
// }

// parent();


// Output:-
// Child -> 20
// Grand Child -> 20
// Both Grand Child and Child Functions can access Parent functions variable

// function parent() {
//     function child() {
//         console.log(a);
//         function grandChild() {
//             var a = 20;
//             console.log(a);
//         }
//         grandChild();
//     }
//     child();
// }

// parent();


// Output:- ReferenceError: a is not defined
// Child function cannot access Grand Child's Variables


// Closures
// function parent() {
//     var a = 20;
//     function child() {
//         var b = 10;
//         console.log(a);
//         function grandChild() {
//             console.log(a + b);
//         }
//         return grandChild;
//     }
//     return child;
// }

// let queryChild = parent();
// console.log(queryChild);

// let queryGrandChild = queryChild();
// queryGrandChild();



// Let/Const are block scoped
function compare(a, b) {
    if (a > b) {
        let c = 4; 
        return c; // Belongs to this block only
    }
    else {
        return c; // Can't access 'c' from this block
    }
}


console.log(compare(51, 6));