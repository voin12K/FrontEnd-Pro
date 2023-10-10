//Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

const userNumber = parseFloat(prompt("number:"));

if (userNumber % 2 === 0) {
    console.log("is an even number")
} else {
    console.log("is not an even number")
}