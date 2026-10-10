// What is curring?

/* Cuuring is a functional programming technique that transforms a function taking multiple arguments into a squence of
functions, each taking one argument at a time. For example, add(a, b) can be curried as a => b => a+b, allowing us to call
it as add(2)(3), Curring relies on higher-order functions and closures and is useful for creating reusable, configurable
functions and simplifying function composition. */

// normal
add(2, 3);
//curred
add(2) (3)

// Curring = one argument at a TimeRanges, through a chain of functions. 

function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(add(2)(3)(4));