// What is lexical scope in js?

// Where the function is written determines what variables it can access.


let x = 10;

function outer() {
    let x= 20;
    function inner() {
        console.log(x);
    }
    return inner
}

const fn = outer()
console.log(fun());

// output 
// 20