// Promise.all() vs Promise.allSettled()

/* 
Promise.all() = fulfills when every Promise fulfills. It rejects as soon as one input rejects.
Promise.allSettled() = Waits for every input to settle, whether fulfilled or rejected, and returns the outcome of each one.
*/

// Promise.all()

const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Products");
const p3 = Promise.resolve("Api Fails");

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error": error);
    })

// Output Error: Api failed

// Promise.allSettled()

const p4 = Promise.resolve("User");
const p5 = Promise.resolve("Products");
const p6 = Promise.resolve("Api Fails");

Promise.allSettled([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })

Output:
[
    {status: "Fulfilled", value: "User"},
    {status: "Fulfilled", value: "Products"},
    {status: "rejected", value: "API failed"},
]