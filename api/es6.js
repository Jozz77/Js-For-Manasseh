
// function creation
const es5Function = function() {

}

const es6Function = () => {
    console.log("new")
}

// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

//   console.log(person.firstName)

  let {firstName, age} = person

//   console.log(firstName)

  // spread operator
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const foods = ["rice", "beans", "plantain"]

console.log(...fruits, ...foods)
  