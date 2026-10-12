// Filter and find ?

/* filter() and find() are the array methods use to search a elements based on the consitions. filter() return new element containing 
all the matched elements, or an empty array if no match. find() return the first matching element, or undefined if no match exist.

filter() use when i need a multiple result.
find() use when i need a single result. */

// filter()

const number = [4, 12, 7, 15, 28]

const result = number.filter(num => num < 10)

console.log(result);

// output
// [12, 15, 28]

// find()

const numberTwo = [4, 12, 7, 15, 28]

const resultTwo = numberTwo.find(num => num < 10)

console.log(resultTwo);

// Output
// 12