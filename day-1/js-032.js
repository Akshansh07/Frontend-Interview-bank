// Explain call, apply and bind?

/* call(), apply() and bind() are javascript methods used to control the value of this inside a regular function.

The main difference is how they pass arguments and whether they execute the fuction immediately.

call() = executes the function immediately and passes arguments individually.
apply() = executes the function immediately and passes arguments as an array.
bind() = return a new function that you can execute later, with this bound to the specified value. 
*/

// call()

const person = {
    name: "Akshansh"
};

function greet(city, country){
    console.log(`hello, i am ${this.name} from ${this.city}, ${this.country}`);
}

greet.call(person, "delhi", "india");

// // Output
// hello, i am Akshansh from delhi india 

// apply()

greet.apply(person, ["delhi", "india"]);

// bind()

const boundGreet = greet.bind(person, "delhi", "india");
boundGreet();

