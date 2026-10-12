// What is the difference between shallow copy and deep copy ?

/* Shallow copy : Creater new outer object, but nested objects are still shared between the original and the copy.

Deep copy : Creates an independent copy of the object, including its nested objects, so changes to copied nested data do 
not affect the original */


// Shallow copy 

const original = {
    name: 'Akshansh',
    address: {
        city: 'delhi'
    }
};

const copy = {...original}

copy.name = "rahul"
copy.address.city = "Mumbai"

console.log(original.name);
console.log(original.address.city);

// Output 
// Akshansh
// Mumbai

// copy.name = "Rahul" changes only the copied object top-level property.
// copy.address.city = "Mumbai" changes the shared nested object, so the original is affected to. 

// Deep copy 

const original_deep = {
    name: "Akshansh",
    address: {
        city: "delhi"
    }
}

const copy_deep = structuredClone()

copy_deep.name = "Rahul";
copy_deep.address.city = "Mumbai"

console.log(original.name);
console.log(original.address.city);

console.log(copy_deep.name);
console.log(copy_deep.address.city);

// Output
// Akshansh 
// Delhi
// Rahul 
// mumbai

// Here, modifying the copy does not changes the original, include its nested address object.Here

// In modern javascript, structuredClone() is a convenient-built-in option for deep copying many kinds of data.


// Three way to copy objects 
// 1. Spread SyntaxError
// const copy = {...original}

// 2. structuredClone()
// const copy = structuredClone()

// 3. JSON serialization 
// const copy = JSON.parse(JSON.stringify(original));