//Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)
const userNumber1 = parseFloat(prompt("first number:"));
const userNumber2 = parseFloat(prompt("second number::"));

if (userNumber1 % userNumber2 === 0) {
    console.log(userNumber2 + " is a divisor" + userNumber1);
} else {
    console.log(userNumber2 + " is not a divisor " + userNumber1);
}
if (userNumber2 % userNumber1 === 0) {
    console.log(userNumber1 + " is a divisor " + userNumber2);
} else {
    console.log(userNumber1 + " is not a divisor " + userNumber2);
}
