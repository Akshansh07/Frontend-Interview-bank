// Reduce: When would you use it?
/* reduce() is the javascript array method that process each element and accumulates a result into a single value. It takes a callback 
with an accumulator and the current element, pluse an optinal initial value. I used to calculate total, count occurence, group records,
and transform array into object.*/


const cart = [
    { name: 'Laptop', price: 50000 },
    { name: 'Keyboard', price: 2000 },
    { name: 'Mouse', price: 1000}   
];

const total = cart.reduce((sum, iteam) => {
    return sum + iteam.price
}, 0);

console.log(total);