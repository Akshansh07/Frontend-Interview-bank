// What does this refer to in js?

/* In js  this refer to the context of a function cell. In a regular object method call, it usually refer to the object before the dot.
In a plain function call, its value depends on strict mode and the execution environment. Arrow functions inherit this from their 
surrounding lexical scope, while constructor functions called with new receive the newly created object as this. We can control 
this for regular functions using call(), apply() and bing(). */