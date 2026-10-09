// What is the difference between lexical scope and dynamic scope?

/* Lexical scope means variable resolution is determined by where a function is define in the source code, whereas 
dynamic scope would resolve variable based on the calling sequences at runtime. js uses lexical scope, so a function 
looks for variables in its own scope and then its outer lexical scopes, regardless of where it called. */