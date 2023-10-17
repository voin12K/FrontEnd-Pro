console.log("Welcome to the calculator!");
let userOperation = prompt("What action do you want to perform? (Add, Diff, Mult, Div, Sqrt, Sin, Cos)");

if (userOperation === null) {
    console.log("Goodbye, see you later.");
} else {
    userOperation = userOperation.toLowerCase(); // Convert userOperation to lowercase for case insensitivity

    if (userOperation === "add" || userOperation === "diff" || userOperation === "mult" || userOperation === "div") {
        const userNumber1 = parseFloat(prompt("Enter the first number:"));

        if (!isNaN(userNumber1)) {
            const userNumber2 = parseFloat(prompt("Enter the second number:"));
            if (!isNaN(userNumber2)) {
                if (userOperation === "add") {
                    console.log("sum: " + userNumber1 + " + " + userNumber2 + " = " + (userNumber1 + userNumber2));
                } else if (userOperation === "diff") {
                    console.log("diff: " + userNumber1 + " - " + userNumber2 + " = " + (userNumber1 - userNumber2));
                } else if (userOperation === "mult") {
                    console.log("mult: " + userNumber1 + " * " + userNumber2 + " = " + (userNumber1 * userNumber2));
                } else if (userOperation === "div") {
                    if (userNumber2 === 0) {
                        console.log("Division by zero is not allowed.");
                    } else {
                        console.log("div: " + userNumber1 + " / " + userNumber2 + " = " + (userNumber1 / userNumber2));
                    }
                }
            } else {
                console.log("The second entered number is not valid. Goodbye.");
            }
        } else {
            console.log("The first entered number is not valid. Goodbye.");
        }
    } else if (userOperation === "sqrt" || userOperation === "sin" || userOperation === "cos") {
        const userNumber = parseFloat(prompt("Enter a number:"));

        if (!isNaN(userNumber)) {
            if (userOperation === "sqrt") {
                if (userNumber < 0) {
                    console.log("Square root of a negative number is not allowed.");
                } else {
                    console.log("sqrt " + userNumber + " = " + Math.sqrt(userNumber));
                }
            } else if (userOperation === "sin") {
                console.log("sin " + userNumber + " = " + Math.sin(userNumber));
            } else if (userOperation === "cos") {
                console.log("cos " + userNumber + " = " + Math.cos(userNumber));
            }
        } else {
            console.log("The entered number is not valid. Goodbye.");
        }
    } else {
        console.log("Invalid operation. Goodbye!");
    }
}
