// What is hoisting in js 

/* Hoisting is the behaviour where js set up declation before executing the code in a scope. var declaration are hoisted and initialized with 
undefine, while let and const are also hoisted but remain uninitalized in the temporary dead zone until their declaration is evaluated.
function declaration are hoisted with their function efination, so they can generally be called before their declaration. importantly 
hosting doesnot mean the source code is physically moved; it's related to how javascript creates and initialize the execution contex. */


// example 

var a = 20 
function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();

// output 
// undefine 
// 20

// the var a inside test() is function-scoped and is hoisted to the top of the function 


sayHello();

var sayHello = function() {
    console.log('hello');
}

// output
// TypeError: sayHello is not a function 