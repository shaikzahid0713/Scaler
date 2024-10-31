### Content
1. JavaScript does not actually move your code around before executing. I know I talk a lot about how JavaScript will act like it moves your functions to the top of your file, but it doesn't actually do this moving. In reality what happens is it first reads your code before executing the code so it knows which functions you have defined before executing. This is really not important, though, as all that matters is how the code actually works and not what happens with your code when the computer parses it.

2. One thing I did not mention in this video is how hoisting works within scopes. For example if you define a function called a and inside that a function you define another function called b the b function would only be hoisted to the top of the a function since the b function is inside the scope of the a function. I probably should have covered this, but this topic is more related to scoping which could be its entirely own video.

3. Technically, let and const are actually hoisted, but they are not initialized with a value which is why you get an error when trying to use them before they are declared. The code example people use to demonstrate this generally looks like this.

```js
function log(){
  console.log(value)
}

let value = 1
log() //output: 1
```

- In this example value is technically used above where it is declared, but it is used inside a function that is called after value is defined which is why there is no error. In some programming languages this would cause an error, but not in JavaScript. For these types of examples you can still use the top to bottom nature of JavaScript to understand what is happening and see why this works. First we define a function called log. None of the code in this function is executed when we define it so we can ignore the code in the function for now. Next we define a variable called value and set it to 1. Finally we call the log function we defined previously which prints out the variable value. As you can see from this top to bottom example the variable value is only ever used after it is defined which is why there is no error and for all intents and purposes you can treat let/const as if they are not hoisted since they are not able to be used before initialization like var/function.

- Now the reason I did not include all this information is for 2 reasons (I did not know some of it, and it is irrelevant). The point of this video is to help someone that does not understand hoisting understand what it is, how you can use it, and why it is important. I could have made this video 10-20 minutes long and talked about every edge case and technicality behind hoisting, but that needlessly bloats the video, makes things much more complicated for someone just learning hoisting, and goes against everything my channel is about. I called the channel Web Dev Simplified for a reason. I want to simplify the web for everyone and not worry about technicalities that don't impact how your program day to day.


### Questions

<details>
    <summary>What is hoisting in JavaScript?</summary>

    Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their respective scopes before the code is executed.

</details>


<details>
    <summary>What is the difference between variable hoisting and function hoisting?</summary>

    Variable hoisting is when the declaration of a variable is moved to the top of its scope, whereas function hoisting is when the entire function, including its body, is moved to the top of its scope.

</details>


<details>
    <summary>How does hoisting work in JavaScript?</summary>

    When the JavaScript engine parses a script, it looks for all variable and function declarations and moves them to the top of their respective scopes. This means that even if you declare a variable or function after you use it, it will still be available in the code.

</details>


<details>
    <summary>What is the value of a variable that is declared but not initialized?</summary>

    If a variable is declared but not initialized, its value will be undefined. This is because when the JavaScript engine hoists the variable declaration, it does not assign a value to the variable.
</details>


<details>
    <summary>What happens if you declare a variable twice in the same scope?</summary>

    If you declare a variable twice in the same scope, the second declaration will overwrite the first one. This is because the JavaScript engine only hoists the first declaration of the variable.

</details>


<details>
    <summary>Can you hoist a variable without using the var keyword?</summary>

    Yes, you can hoist a variable without using the var keyword by declaring it as a function parameter or by using a function expression instead of a function declaration.

</details>

<details>
    <summary>What is the difference between a function declaration and a function expression in terms of hoisting?</summary>

    A function declaration is hoisted to the top of its scope, whereas a function expression is not hoisted. This means that you can call a function declaration before it is defined, but you cannot call a function expression before it is defined.

</details>


<details>
    <summary>What is the scope of a hoisted variable?</summary>

    The scope of a hoisted variable is determined by where it is declared. If a variable is declared inside a function, its scope is the function. If a variable is declared outside of any function, its scope is the global scope.

</details>


<details>
    <summary>How can you prevent hoisting in JavaScript?</summary>

    You cannot prevent hoisting in JavaScript, but you can write your code in a way that avoids potential problems. One way to do this is to declare all variables and functions at the top of their respective scopes.

</details>


<details>
    <summary>What are the potential pitfalls of hoisting in JavaScript?</summary>

    One potential pitfall of hoisting is that it can lead to unexpected behavior if you are not aware of how it works. For example, if you declare a variable inside a block statement, but then use it outside of the block, the variable will be hoisted to the top of the function or global scope, which may not be what you intended. Another potential pitfall is that hoisting can make it difficult to understand the flow of your code, especially if you are not familiar with the concept.

</details>


<details>
    <summary>Can hoisting change the order of execution in JavaScript?</summary>

    Yes, hoisting can change the order of execution in JavaScript because variables and function declarations are moved to the top of their respective scopes before the code is executed.

</details>



<details>
    <summary>What is the difference between hoisting in var and let declarations?</summary>

    Var declarations are hoisted to the top of their scope, whereas let declarations are hoisted to the top of the block in which they are defined. This means that let variables are not accessible outside of their block.

</details>



<details>
    <summary>What happens if you try to access a hoisted variable before it is declared?</summary>

    If you try to access a hoisted variable before it is declared, its value will be undefined.

</details>



<details>
    <summary>What is the difference between a let variable and a const variable in terms of hoisting?</summary>

    Let and const variables are both hoisted to the top of their respective blocks, but const variables cannot be reassigned after they are declared.

</details>


<details>
    <summary>What is the hoisting behavior of arrow functions in JavaScript?</summary>

    Arrow functions are not hoisted in JavaScript, so you cannot call an arrow function before it is defined.

</details>



<details>
    <summary>Can hoisting occur within a function?</summary>

    Yes, hoisting can occur within a function, which means that any variables or functions declared within the function will be hoisted to the top of the function's scope.

</details>


<details>
    <summary>What is the scope chain in JavaScript?</summary>

    The scope chain in JavaScript is the hierarchy of scopes that the JavaScript engine uses to look up the value of a variable. The scope chain includes the current function's scope, any outer functions' scopes, and the global scope.

</details>


<details>
    <summary>What will be the output of the following code snippet?</summary>

```js
console.log(a);
var a = 10;
```

    Output: undefined

    Explanation: Even though a is declared later in the code, it is still accessible at the top of its scope due to hoisting. However, the value of a is not defined until it is actually assigned a value, which is why the output is undefined.

</details>


<details>
    <summary>What will be the output of the following code snippet?</summary>

    Output: ReferenceError: a is not defined

    Explanation: In this case, a is declared using let, which means it is not hoisted to the top of its scope. Since a has not been defined before the console.log() statement, a reference error is thrown.

</details>


<details>
    <summary>What will be the output of the following code snippet?</summary>

```js
    var a = 5;

    (function() {

    console.log(a);

    var a = 10;

    })();
```

    Output: undefined

    Explanation: This code creates a new function and immediately calls it. Within the function, a is declared later in the code using var, which means it is hoisted to the top of the function scope. Therefore, the console.log() statement refers to the hoisted variable, which has not yet been assigned a value, resulting in undefined as the output.

</details>


<details>
    <summary>What will be the output of the following code snippet?</summary>

    function test() {

    console.log(a);

    var a = 10;

    console.log(a);

    }

    test();

    Output:

    undefined
    10

    Explanation: Within the function test(), a is declared later in the code using var, which means it is hoisted to the top of the function scope. Therefore, the first console.log() statement refers to the hoisted variable, which has not yet been assigned a value, resulting in undefined as the output. The second console.log() statement refers to the value of a after it has been assigned a value of 10, resulting in 10 as the output.

</details>