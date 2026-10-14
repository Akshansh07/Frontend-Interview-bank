// Some vs every?

/* Both some and every are js method used to check whether array element satisfy conditon.

The main difference:
some()= return true if at least one element satisfies the condition, some return false for an empty array.

every() = return true only if all element satisfies the condition, every return true for empty array. */ 

// some()

const number = [10,20,30,40]
const result = number.some(num => num > 25);
console.log(result)

// output 
// True

// Every()
const numberTwo = [10,20,30,40]
const resultTwo = number.every(num => num > 25);
console.log(resultTwo)

// Output 
// False