console.log("Welcome to the calculator!");

let userOperation = prompt("What action do you want to perform? (Add, Diff, Mult, Div, Sqrt, Sin, Cos)");

if (userOperation === null) {
    console.log("Goodbye, see you later.");
} else {
    userOperation = userOperation.toLowerCase(); // Convert userOperation to lowercase for case insensitivity

    switch (userOperation) {
        case "add":
        case "diff":
        case "mult":
        case "div":
            const userNumber1 = parseFloat(prompt("Enter the first number:"));
            const userNumber2 = !isNaN(userNumber1) ? parseFloat(prompt("Enter the second number:")) : NaN;
            if (!isNaN(userNumber2)) {
                const operationSymbol = userOperation === "add" ? "+" :
                    userOperation === "diff" ? "-" :
                        userOperation === "mult" ? "*" :
                            "/";
                const result = userOperation === "add" ? userNumber1 + userNumber2 :
                    userOperation === "diff" ? userNumber1 - userNumber2 :
                        userOperation === "mult" ? userNumber1 * userNumber2 :
                            userNumber2 === 0 ? "Division by zero is not allowed." : userNumber1 / userNumber2;
                console.log(userOperation + ": " + userNumber1 + " " + operationSymbol + " " + userNumber2 + " = " + result);
            } else {
                console.log("The " + (isNaN(userNumber1) ? "first" : "second") + " entered number is not valid. Goodbye.");
            }
            break;
        case "sqrt":
        case "sin":
        case "cos":
            const userNumber = parseFloat(prompt("Enter a number:"));
            if (!isNaN(userNumber)) {
                const result = userOperation === "sqrt" ? (userNumber < 0 ? "Square root of a negative number is not allowed." : Math.sqrt(userNumber)) :
                    userOperation === "sin" ? Math.sin(userNumber) :
                        Math.cos(userNumber);
                console.log(userOperation + " " + userNumber + " = " + result);
            } else {
                console.log("The entered number is not valid. Goodbye.");
            }
            break;
        default:
            console.log("Invalid operation. Goodbye!");
    }
}
