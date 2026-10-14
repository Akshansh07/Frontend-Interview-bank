// What is class in javascript?

/* A class in javascript is a template for creating a objects. It was intoduce in ES6 and provides clener syntax for defining constructors,
instance methods, and inheritance. The constructor initilizes an instance, while methods are generally stored on the class's prototype 
and shared among instances. JS classes use prototype-based inheritance under the hood and support features such as extands(), super()
and static method */

// Example

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hi, I'm ${this.name}`;
    }
}

const person1 = new Person("Akshansh", 27);
const person2 = new Person("Rahul", 29);

console.log(person1.name);   // "Akshansh"
console.log(person1.greet()); // Hi, im Akshansh
console.log(person2.greet()); // Hi, im Rahul 