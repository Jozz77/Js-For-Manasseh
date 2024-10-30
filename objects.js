
// const Laptop = {} // an empty object

const manassehLaptop = {
    color: "black",
    windows: "Window 10",
    ram: "8gb",
    yearsofUsage: 1,
    isNice: false,
    sayHello: function() {
        console.log("Manasseh Laptop says Hello!");
    },
    allPreviousOwners: ["John", "Peter", "Ezekiel"]
}

manassehLaptop.rom = "120gb" // add a new property
manassehLaptop.color = "red" // change the value of the propery
delete manassehLaptop.windows // delete a property

// const laptopColor = manassehLaptop.color

console.log(manassehLaptop.color)
console.log(manassehLaptop.sayHello())
console.log(manassehLaptop.allPreviousOwners[0])
// console.log(manassehLaptop.windows)
// console.log(manassehLaptop["ram"])