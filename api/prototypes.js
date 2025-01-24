const person = new Object();

const Manasseh = {
  age: 90,
  eyeColor: "red",
};

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
Manasseh.age = 30;
Manasseh.lastName = "Edwin";

// console.log("person", Manasseh)

function PersonType(name, age, eyeColor) {
  this.name = name;
  this.age = age;
  this.eyeColor = eyeColor;
}

const Jonathan = new PersonType("Jonathan", 50, "blue");
const Mary = new PersonType("Mary", 22, "Purple");

// console.log(Jonathan);
// console.log(Mary);

// use object assign

// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Create Source Object
const person2 = { 
    firstName: "Anne", 
    lastName: "Smith" 
};


// Assign Source to Target
Object.assign(person1, person2);

console.log("person1", person1)