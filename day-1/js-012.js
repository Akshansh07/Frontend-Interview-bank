// What are arrow functions, and how do they differ from regular functions?

/* Arrow functions were introduce in ES6 as a concise way to write functions using => syntax. Their most important difference
is that they don't have their own this; insted, they inherit it lexical from the surrounding scope. They also dont have their
own arguments object and cannot be used as constructors with new. unlike regular functions declaration, arrow functions 
assigned to variables follow the hoisting rules of those variables. */


const add = (a, b) => {
    return a + b;
};

console.log(add(5,3));