function calculateFactorial(userNumber) {
    if (userNumber === 0) {
        return 1;
    } else {
        return userNumber * calculateFactorial(userNumber - 1);
    }
}

const userNumber = prompt("number");
const factorial = calculateFactorial(userNumber);
console.log(`The factorial of ${userNumber} is ${factorial}`);