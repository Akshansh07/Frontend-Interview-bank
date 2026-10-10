// What are rest parameters

/* Rest parameters in javascript allow a function to accept a variable number of argument and collect the remaining argument
into an array. They are declared using (...) before a parameter name and must always be the last parameter in the function 
defination. Unlike the arguments object, a rest parameter is a real array, so array methods such as map(), filter(), and 
reduce() can be used directly. */

// Remember: Rest parameter collects arguments into an array; spred syntax expands interable values

// Example 

function displayUser(name, ...skills){
console.log('name:', name);
console.log('skills', skills);
}

displayUser("Akshansh", "react", "javascript", "html")

// output
// name: Akshansh
// skills: [React, javascript, html]