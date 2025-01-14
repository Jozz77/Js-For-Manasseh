
// setTimeout is not gonna wait for the rest of the codes
setTimeout(() => console.log("Task 1"), 4000)

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");


// async/await

const wakeUp = () => {
    const waking = "You woke up"
    return waking
}

const wentToWork = () => {
    return console.log("You went to work")
}

const cameBackHome = () => {
    return console.log("You came back to your house")
}

const allActivitiesToday = async () => {
    wakeUp();

}
 