// What is NaN and how do you check for it?

/* NaN stands for Not-a-Number. It's a special numeric value produced when a mathemetical operation or numeric conversion doesn't result in a
valid number.Interestingly, typeof NaN is 'number'. Also NaN is not equal to itself, so we shouldn't use value === NaN to check for it. The 
preferred way is Number.isNaN(value), Which checks whether the value is actually NaN without performing type coerion. The global isNaN() function
is different because it first coerces the value to a number. */


// Example 


/*
typeof NaN
//  "number"

NaN === NaN 
// false 

Number.isNaN(NaN)
// true 

Number.isNaN('hello')
// false 

isNaN('hello')
// True

*/