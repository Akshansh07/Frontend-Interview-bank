// What is a higher-order functions ?

/* A higher order function is a function that either accepts another function as an argument or return a function. javascript 
support this because functions are first-class values. Common examples include map(), filter(), reduce(), which accept callback
functions. Higher-order functions are usefull for reusable logic, transforming data, handaling events and implementing pattern 
such as debouncing and function composition. */

// Quick memory trick

/* accepts function --> higer-order function
Return a function --> higher-order function
Funtions passed as an argument --> cllback 
Map, filter, reduce --> common build in example */

// Passing function as an argument 

function greet(name){
    return `hello, ${name}!`;
}

function processUser(callback){
    console.log(callback("Akshansh"));
}

processUser(greet);

// Return a function

function multiply(factor){
    return function(number){
        return number * factor;
    }
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(5));
console.log(triple(5));

// Build in higher order functions

// Map()
const nums = [1,2,3,4];

const result = nums.map(n => n*2);

console.log(result);

// [2,4,6,8]
// map() accepts a callback and return a new array containing the transformed elements.

// Filter()

const numsTwo = [1,2,3,4,5,6,7,8];

const resultTwo = numsTwo.filter(n => n%2 === 0);

console.log(resultTwo)

//[2,4,6,8]
// filter() accepts a callback and keeps the elements for which the callback return a truthy value.

// Reduce()

const numsThree = [1,2,3,4];

const resultThree = numsThree.reduce(
    (sum, n) => sum + n, 0
);

console.log(resultThree);

// 10

//reduce() accepts a callback that accumulates values into a single result.