// What is Promise ?

/* 
    A promise is js object representing the eventual completion or failure of an asynchronous operation. It has three states 
    1 - pending
    2 - fulfilled
    3 - rejected 
    We use .then() to handle fulfillment, .catch() to handle rejection and finally() for cleanup. Promises support chaning and can 
    be used with async/ await to write redable asynchronous code.
*/

// Create a promise 

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if(success){
        resolve("Operation successfull!");
    } else{
        reject("Something went wrong");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

    // Important: the promise executer functions runs syncronously when the promise is created. The .then() and .catch() handles 
    // runs asyncronously.


// Promise.all() - Fulfills when all inputs fulfil, rejects if one rejects. 
// Promise.allSettled() - Waits for every input to settle. 
// Promise.race() - settles with the first input to settle 
// Promise.any() - Fulfills with the first fulfillment; rejects if all input reject. 