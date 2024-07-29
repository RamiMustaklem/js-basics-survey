/**
 * Function Declarations
 * Hoisted, meaning they can be called before they are defined in the code. This is useful for organizing code in a way that prioritizes readability and the logical flow of execution.
 */

// Can be called before it's defined due to hoisting
console.log(greet('Alice'));

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}


/**
 * Function Expressions
 * Not hoisted, which means they cannot be called before they are defined. They are often used when a function needs to be passed as an argument to another function or when defining functions within conditional blocks.
 */

// Function expression
const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};

// Must be defined before it's called
console.log(sayGoodbye('Bob'));


/**
 * Arrow Functions
 * Provide a concise syntax for writing function expressions. They are especially useful for short functions and when using this in the context of object methods and callbacks.
 */

// Arrow function with explicit return
const add = (a, b) => {
    return a + b;
};

// Arrow function with implicit return
const multiply = (a, b) => a * b;

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6


/**
 * Immediately Invoked Function Expressions (IIFE)
 * IIFEs are functions that are executed as soon as they are defined. They are useful for creating a private scope for variables.
 */

(function() {
    var privateVar = 'secret';
    console.log('This is an IIFE.');
})();

/**
 * Comparing Function Declarations and Expressions
 * Hoisting: Function declarations are hoisted; function expressions are not.
 * Syntax: Function declarations require a name, while function expressions can be anonymous.
 * Use Cases: Function expressions can be used as IIFEs or passed as arguments to other functions. Function declarations are better suited for defining utility functions that can be used throughout a script.
 */
