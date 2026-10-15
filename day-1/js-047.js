// Promise.race vs Promise.any

/* 
Promise.race() = settles with the first Promise to settle, whether fulfilled or rejected.
Promise.any() = fulfills with the first Promise to fulfill. It ignores rejections unless every input rejects.
*/

// Promise.race()

const p1 = new Promise((resolve) =>{
    setTimeout(() => resolve("First success"), 1000);
});

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() => reject("First failure"), 500);
});

Promise.race([p1, p2] 
    .then(result => console.log(result))
    .catch(error => console.log(error))
)

// Output
// First failure 

// Promise.any()


const p3 = new Promise((resolve,reject) =>{
    setTimeout(() => reject("First success"), 500);
});

const p4 = new Promise((resolve) =>{
    setTimeout(() => resolve("Second sucess"), 1000);
});

Promise.any([p3, p4] 
    .then(result => console.log(result))
    .catch(error => console.log(error))
)

// Output 
// Second sucess