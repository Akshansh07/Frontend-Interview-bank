// What is the javascript event loop?

/* The event loop is the machenism that coordinates synchromous javascript execution with asynchronous callaback, allowing javascript 
to handle operations such as timers, user events, and promises without blocking the main thread while it waits for those operations. */

// remember these 4 concepts 
// call stack = executes javascript functions
// web APIs / runtime APIs = handle operations such as timers and browser events outside the current js call stack
// Queues = Holds callbacks that are ready to run 
// Event loop = coordinated when quued work can execute.APIs


// Interview example 

console.log("A");

setTimeout(() => {
    console.log("B")
}, 0);

Promise.resolve().then(() => {
    console.log("c");
});

console.log("D");

// Output
// A 
// D 
// c 
// B

// promise because micotask run first 

// If the promise inside th timer then first timer console pring then the code inside promise executes 