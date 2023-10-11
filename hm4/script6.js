//Дано тризначне число.
// Визначити чи є парною сума його цифр.
// Визначити, чи кратна сума цифр п'яти.
// Визначити чи є добуток його цифр більше 100.

const userNumber = prompt("Enter a three-digit number: ");

if (userNumber.length === 3 && !isNaN(userNumber)) {
    const sumOfDigits = Array.from(userNumber, Number).reduce((a, b) => a + b);
    console.log(sumOfDigits % 2 === 0 ? "The sum of digits is even." : "The sum of digits is not even.");
    console.log(sumOfDigits % 5 === 0 ? "The sum of digits is a multiple of 5." : "The sum of digits is not a multiple of 5.");


    const productOfDigits = Array.from(userNumber, Number).reduce((a, b) => a * b);
    console.log(productOfDigits > 100 ? "The product of digits is greater than 100." : "The product of digits is not greater than 100.");

} else {
    console.log("Please enter a valid three-digit number.");
}
