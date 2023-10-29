let calculatorHistory = [];

while (true) {
    let userChoice = prompt("Choose an action:\n1. Open calculator\n2. View calculator history\n3. Exit");

    if (userChoice === "1") {
        calculator();
    } else if (userChoice === "2") {
        history();
    } else if (userChoice === "3" || userChoice === null) {
        showNotification();
        break;
    }
}

function calculator() {
    let userOperation = prompt("What action do you want to perform? (add, diff, mult, div, sqrt, sin, cos)");

    if (userOperation === null) {
        showNotification();
    } else if (!isValidOperation(userOperation)) {
        alert("I don't recognize your operation. Please choose a valid operation like: (add, diff, mult, div, sqrt, sin, cos)");
    } else {
        switch (userOperation) {
            case "add":
            case "diff":
            case "mult":
            case "div":
                let userNumber1 = getValidNumber("Enter the first number:");
                let userNumber2 = getValidNumber("Enter the second number:");

                if (!isNaN(userNumber2)) {
                    let result;
                    let operationSymbol;

                    if (userOperation === "add") {
                        result = add(userNumber1, userNumber2);
                        operationSymbol = "+";
                    } else if (userOperation === "diff") {
                        result = diff(userNumber1, userNumber2);
                        operationSymbol = "-";
                    } else if (userOperation === "mult") {
                        result = mult(userNumber1, userNumber2);
                        operationSymbol = "*";
                    } else if (userNumber2 !== 0) {
                        result = div(userNumber1, userNumber2);
                        operationSymbol = "/";
                    } else {
                        result = "Division by zero is not allowed.";
                    }

                    let historyRes = userNumber1 + " " + operationSymbol + " " + userNumber2 + " = " + result;
                    calculatorHistory.push(historyRes);
                    alert(userOperation + ": " + userNumber1 + " " + operationSymbol + " " + userNumber2 + " = " + result);
                }
                break;

            case "sqrt":
            case "sin":
            case "cos":
                let userNumber = getValidNumber("Enter a number:");
                let result;

                if (userOperation === "sqrt") {
                    result = sqrt(userNumber);
                } else if (userOperation === "sin") {
                    result = sin(userNumber);
                } else {
                    result = cos(userNumber);
                }
                let historyRes = userOperation + " " + userNumber + " = " + result;
                calculatorHistory.push(historyRes);
                alert(userOperation + " " + userNumber + " = " + result);
                break;
        }
    }
}

function add(userNumber1, userNumber2) {
    return userNumber1 + userNumber2;
}

function diff(userNumber1, userNumber2) {
    return userNumber1 - userNumber2;
}

function mult(userNumber1, userNumber2) {
    return userNumber1 * userNumber2;
}

function div(userNumber1, userNumber2) {
    return userNumber1 / userNumber2;
}

function sqrt(userNumber) {
    return userNumber < 0 ? "Square root of a negative number is not allowed." : Math.sqrt(userNumber);
}

function sin(userNumber) {
    return Math.sin(userNumber);
}

function cos(userNumber) {
    return Math.cos(userNumber);
}

function showNotification() {
    return alert('Goodbye, see you later.');
}

function history() {
    if (calculatorHistory.length === 0) {
        alert("Calculator history is empty.");
    } else {
        const historyText = "Calculator History:\n" + calculatorHistory.join("\n");
        alert(historyText);
    }
}

function isValidOperation(operation) {
    return ['add', 'diff', 'mult', 'div', 'sqrt', 'sin', 'cos'].includes(operation);
}

function getValidNumber(promptMessage) {
    let userNumber = parseFloat(prompt(promptMessage));

    if (userNumber === null) {
        showNotification();
    }

    while (isNaN(userNumber)) {
        userNumber = parseFloat(prompt("This is not a valid number. Please enter a valid number."));
    }

    return userNumber;
}
