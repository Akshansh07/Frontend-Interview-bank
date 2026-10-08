// What is the different between == and ===?

/* == is loose equality operator. It performs type coercion before comparing values, so values with different type can 
sometimes be considered equal. === is the strict equality operator. It does not perform type coercion and checks both the values 
and type. For example, 5 == '5' is true, but 5 === '5' is false. In modern js, i generally prefer === because it makes comparisons
predictable and avoid inexpected type coericon. */


5== '5' // true
5=== '5' // false

true == 1 // true
true === 1 // false

false == 0 // true
false === 0 // false

null == undefined // true
null === undefined // false

[] == false // true
[] === false // false

// == -> coercion
// === -> no coercion
// objects/ array -> eqality is based on reference, not their content. 

