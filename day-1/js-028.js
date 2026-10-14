// How do you remove duplicates from an array?

/* Use set to remove duplicate array from the array because set() collect the unique value. */ 

set()

const number = [1,2,3,1,3,5]

const uniqueNumber = [...new set(number)];

console.log(uniqueNumber);

// Output
// [1,2,3,5]

// [...new set(number)] use spread syntax to convert the set back into an array. 



















