//Дано два різні числа. Визначити, яке з них більше, а яке менше.

const userNumber1 = parseFloat(prompt("first number:"));
const userNumber2 = parseFloat(prompt("second number::"));

if (userNumber1 > userNumber2) {
    console.log( userNumber1 + " > " + userNumber2);
}

if (userNumber1 < userNumber2) {
    console.log( userNumber1 + " < " + userNumber2);
}

if (userNumber1 === userNumber2) {
    console.log( userNumber1 + " = " + userNumber2);
}
