const pTag = document.getElementById("pTag");

const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

// map method
const firstName = users.map((user) => user.firstName);
const ages = users.map((user) => user.age);
// const firstName = users.map(({firstName}) => firstName);
// console.log(firstName);

pTag.innerHTML = firstName

// filter method
const filterUsers = users.filter((user) => user.age >= 35);
console.log(filterUsers)

// reduce method
const sumOfAges = ages.reduce((total, currentValue) => {
    return total + currentValue
}, 0)

console.log("sumOfAges", sumOfAges)