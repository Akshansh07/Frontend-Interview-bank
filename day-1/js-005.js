// What is type coercion in javascript?

/* Type coercion is the conversion of value from one data type to another. In javascript, this can happen implicitly when the language performs
an oprtation involving different types, or explicitly when we use functions like Number(), Sring(), or Boolean(). For example, '5' - 2 produces
3 because the string is implicitly converted to a number, while '5' + 2 produce '52' because the  + operator perform string concatenation 
when string is involve. The  == operator also performs type coercion, whereas === does not. */


/* type coercion 

1- implicit - js does it 
2- explicit  - Developer does it

"5" - 2 //3
"5" * 2 // 10
"5" == 5 // true 
true + 1 //2

explicit

Number ("5") // 5
String(5)  // "5"
Boolean(1) // true 

+ -> Can concatenate String
- -> coverted to number 
* -> converted to number 
/ -> converted to number 
== -> perform to number 
=== -> does not perform coercion 

*/

 