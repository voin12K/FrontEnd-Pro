//Дано тризначне число.
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

const userNumber = prompt("Enter a three-digit number: ");

if (userNumber.length === 3 && !isNaN(userNumber)) {
    const digits = Array.from(userNumber, Number);
    const allDigitsSame = digits[0] === digits[1] && digits[1] === digits[2];
    const anyDigitsMatch = digits[0] === digits[1] || digits[1] === digits[2] || digits[0] === digits[2];

    console.log("Are all digits the same?", allDigitsSame);
    console.log("Are there any matching digits?", anyDigitsMatch);
} else {
    console.log("Please enter a valid three-digit number.");
}
