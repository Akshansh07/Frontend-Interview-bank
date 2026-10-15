// Microtask vs Macrotask 

/* 
Microtask = Promise.then(), catch(), finally(), queueMicrotask()
- after the current tasks synchronous code finishes
- Microtask are drained before the next task

Macrotask = setTimeout(), setInterval(), many browser event callback
- As subsequent task 
- Runs after the microtask checkpoint

*/