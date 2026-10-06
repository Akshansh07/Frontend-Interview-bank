// What are primitive and reference type in js?
/* Javascript values are commonly divided into primitive and object/refence values. Primitive type include sting, number,
bigint, boolean, undefined, null and symboL. They are immutable and when assigned to another variable, the value is copid immidiately.
Object suct as arrays, object and functions are reference values. When we assigned an object to another variable, both 
variables can refer to the same object, so modifiction the object through one variable can affect what we see through the 
other. This is especially inportant in react because we generally create new object or array references when updating 
state insted of mutating existing state. */


// Primitive 

let a = 10;
let b = a; // copy the value of a to b

b = 20; // change the value of b

console.log(a); // 10
console.log(b); // 20

// Reference 

let a = { value: 10 };
let b = a;

b.value = 20; // change the value of b

console.log(a.value); // 20
console.log(b.value); // 20
