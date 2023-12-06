// reducer in object 

const users = [
    { firstName: 'John', age: 34 },
    { firstName: 'John', age: 34 },
    { firstName: 'John', age: 75 },
    { firstName: 'John', age: 75 },
    { firstName: 'John', age: 75 },
    { firstName: 'John', age: 12 },
];
const output = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    }
    else {
        acc[curr.age] = 1

    }
    return acc
}, {})
console.log(output)