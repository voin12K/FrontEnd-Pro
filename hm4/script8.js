//Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741).

const userNumber = prompt("Enter a six-digit number: ");

if (userNumber.length === 6 && !isNaN(userNumber)) {
    const isMirrorNumber = userNumber === userNumber.split('').reverse().join('');

    console.log(isMirrorNumber ? "The number is a mirror number." : "The number is not a mirror number.");
} else {
    console.log("Please enter a valid six-digit number.");
}
