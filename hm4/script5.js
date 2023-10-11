//Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

const userNumber = prompt("Enter a two-digit number: ");

if (userNumber.length === 2 && !isNaN(userNumber)) {
    const [firstDigit, secondDigit] = userNumber.split('').map(Number);
    const result = firstDigit > secondDigit ? "The first digit is greater." : firstDigit < secondDigit ? "The second digit is greater." : "Both digits are equal.";
    console.log(result);
} else {
    console.log("Please enter a valid two-digit number.");
}
