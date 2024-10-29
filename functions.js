
// the rate of 1 dollar to naira
const dollarRate = 1650

function dollarToNaira(dollar) {
    // the conversion of dollar to naira
    const naira = dollar * dollarRate
    console.log(`The value of ${dollar} dollars is equal to ${naira} naira`);
    return naira
}

// dollarToNaira(30)

// function dollarToNairaValue(dollar, nairaValue) {
//     const naira = dollar * nairaValue
//     console.log(`The value of ${dollar} dollars is equal to ${naira} naira`);
//     return naira
// }

// dollarToNairaValue(3, 1700)

 const divideNumber = (num1, num2) => {
    const division = num1 / num2
    console.log(`${num1} / ${num2} = ${division}`)
    return division
 }

 divideNumber(8, 4)
