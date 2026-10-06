// What is the different between var, let and const?

/* var, let and const are javascript variable declaration keywords. var is function-scoped, While let and const 
are block-scoped. var can be redeclared and reassigned, let can be reassigned but not redeclared in the same scope, 
and const cannot be reassigned or redeclared. All three are hoisted , but var is initialized with undefined, whereas
let and const remain in the "temporal dead zone" until they are declared. In modern js, I generally use const by 
default and let where reassignment is required, and avoid var unless working with legacy code. */


for(var i=1; i<=3; i++) {

    setTimeout(()=> {
        console.log(i);
    }, 1000);
}

// Output 
// 4
// 4
// 4

// because var has function scope. There is only one i variable. By the time setTimeout callback execute, the loop has finised
// and i === 4 

for(let i=1; i<=3; i++) {

    setTimeout(()=> {
        console.log(i);
    }, 1000);
}

// Output 
// 1
// 2
// 3

// Because let create a new binding for each loop iteration.

// 1.Scope 
{
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined

// 2. Reassignment 

var a = 10;
a = 20; // valid

let d = 30;
d = 40; // valid

const c = 50;
c = 60; // TypeError: Assignment to constant variable.

// 3. Redeclaration

var a = 10;
var a = 20; // valid

let b = 30;
let b = 40; // SyntaxError: Identifier 'b' has already been declared

const c = 50;
const c = 60; // SyntaxError: Identifier 'c' has already been declared
