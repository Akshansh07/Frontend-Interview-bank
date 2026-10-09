// What is a closure in javascript ?

/* A closure is a function together with its retained access to the lexical environment in which it was created. It allows
an inner functions to access variables from its outer scope even after the outer function has finished executing. Clouser are 
usefull for maintaning private state, creating function factories, handaling callbacks, and implementing pattern such as 
counters and memoization.

Quich memory 
Closure = function + access to its lexical environment. */ 


// Example 

function counter(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    };
}

const incresing = counter();

incresing();
incresing();
incresing();

// output 
// 1
// 2
// 3