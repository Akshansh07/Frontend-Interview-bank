// map vs forEach

/* map() and forEach() both iterate over array element. The key difference is that Map() return a new array containg the callback's return
values, making it useful for transforming data. forEach() return undefine and its typically used for side effects, such as logging 
or updating an external variable. */

// Map()

const number = [1,2,3,4]

const result = number.map(num => num*2)

console.log(result);
console.log(number);

// output
// [2,4,6,8]
// [1,2,3,4]

// forEach()

const numberTwo = [1,2,3,4]

const resultTwo = numberTwo.forEach(num => num * 2)

console.log(resultTwo);
console.log(numberTwo);

// Output 
// Undefine
// [1,2,3,4]