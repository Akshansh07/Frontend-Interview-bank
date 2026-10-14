// How do you group an array of object by a property?

// Using reduce()

const employee = [
    { name: "Akshansh", department: "IT"},
    { name: "Priya", department: "HR"},
    { name: "Rohit", department: "HR"},
    { name: "Komal", department: "IT"},
    { name: "Aman", department: "HR"}
];


const grouped  = employee.reduce((acc, employee) => {
    const department =  employee.department;
    if(!acc[department]){
        acc[department] = [];
    }
    acc[department].push(employee);
    return acc
},{});

console.log(grouped);

// Output
// {
//     IT: [
//         { name: "Akshansh", department: "IT"},
//         { name: "Komal", department: "IT"}
//     ],
//     HR: [
//             { name: "Priya", department: "HR"},
//             { name: "Rohit", department: "HR"},
//             { name: "Aman", department: "HR"}    
//     ]
// }