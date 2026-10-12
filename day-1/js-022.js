// Spread syntax and object.assign?

/* Spread syntax and object.assign() both copy enumerable own property from sorce object, and both perform shallow copies. The key
difference is that spread create a new object in an object literal while object.assign() write properties into a specific target and return
the target */

// spread creates a new object literal; object.assign() assigns properties to a target. 

// spred styntax

const user = { name: 'Akshansh'}

const updateUser = {
    ...user,
    age: 25
};

console.log(user);
console.log(updateUser);

// Output 
// {name: 'Akshansh'}
// {name: 'Akshansh', age: 25}

// The original object remains unchange 

// Object.assign()

const userTwo = { name: 'akshnash'}
Object.assign(user, {age: 25})

console.log(user)

// Output
// {name: 'Akshansh', age: 25}

// user itself modified because it is the target object 