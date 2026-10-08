//  What is the temporal Dead zone ?

/* The Temporal Dead Zone is the period between entering a scope and the point where a let or const variable is initialized. These 
variables are hoisted, but unlike var, they are not initialized with undefined. If we try to access them during the TDZ, js throws 
a referenceError. The TDZ ends when the execution reach the variable declation. */

function test(){
    console.log(a);
    let a = 10;
}
test();

// Output 
// referenceError