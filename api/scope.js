// a global variable
const number =  2

const newfunction = () => {
    // local variable
    const numberLocal = 4
    return 1 + numberLocal
}

// console.log("local number", numberLocal);
console.log("new function", newfunction());