// What is the difference between a function declaration and a function expression?

/* A function declaration defined a named function using the function keyword, whereas a function expression creates a 
function as a part of an expression, often assigning it to a variable. The key difference is hoisting: function declarations
are available before their declaration, while function expressions follow the hoisting rules of their variable binding.
*/

// Function declaration 

function greet(){
    console.log('hello')
}
greet();


// Function expression 

const greet = function() {
    console.log('hello');
}
greet();