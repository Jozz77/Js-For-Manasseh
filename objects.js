
// const Laptop = {} // an empty object

const manassehLaptop = {
    color: "black",
    windows: "Window 10",
    ram: "8gb",
    yearsofUsage: 1,
    isNice: false,
    newArray: ["new", "done", 1, true],
    sayHello: function() {
        console.log("Manasseh Laptop says Hello!");
    },
    allPreviousOwners: ["John", "Peter", "Ezekiel"]
}

manassehLaptop.rom = "120gb" // add a new property
manassehLaptop.color = "red" // change the value of the propery
delete manassehLaptop.windows // delete a property

// const laptopColor = manassehLaptop.color

// console.log(manassehLaptop)

// convert from js object to json format
const manassehLaptopJson = JSON.stringify(manassehLaptop)

// convert from json to javascript object
const manassehLaptopOjbect = JSON.parse(manassehLaptopJson)

console.log(manassehLaptopJson)
console.log(manassehLaptopOjbect)
