
let isDoorLocked = true
let passThrough;

if (isDoorLocked === true) {
    passThrough = "Pass through the window"
} else {
    passThrough = "Pass through the Door"
}

const age = 200
let isPerson;

if (age <= 17) {
    isPerson = "You're a kid"
} else if (age >= 18 && age < 60) {
    isPerson = "You're a Adult"
} else {
    isPerson = "You're Old"
} 

// console.log(isPerson);


// for loop

let x;
// let y;
// x++ is still the same with x + 1


// for (x = 2; x <  7; x++) {
//     console.log("the current value of x is", x)
// }

let i = 0;

// while (i < 7) {
//     i++;
//     console.log("the current value of i is", i);
// }

do {
    i + 2;
    console.log("the current value of i is", i);
} 
while (i < 7);