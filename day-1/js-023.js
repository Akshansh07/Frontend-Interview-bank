// How does destructuring work 

/* Destructuring is an ES6 feature that allows us to extract values form array and properties from the object into variables using 
concise syntax. Array desrtucturing working by postion whereas object destructuring works by property name. */

// Destructuring 

const color = ["red", "green", "blue"];

const[first, second, third] = color;

console.log(first)
console.log(second)
console.log(third)


// Object destructuring 

const user= {
    name: 'akshansh',
    age: 25,
    city: "delhi"
}

const {name, age, city} = user

console.log(name);

console.log(age);

console.log(city);