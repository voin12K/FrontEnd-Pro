alert("Welcome to the calculator!");

let userContinue = true;

while (userContinue) {
    let userOperation = prompt("What action do you want to perform? (add, diff, mult, div, sqrt, sin, cos)");

    if (userOperation === null) {
        alert('Goodbye, see you later.');
        userContinue = false;
    } else if (userOperation !== 'add' && userOperation !== 'diff' && userOperation !== 'mult' && userOperation !== 'div' && userOperation !== 'sqrt' && userOperation !== 'sin' && userOperation !== 'cos') {
        alert("I don't recognize your operation. Please choose a correct operation like: (add, diff, mult, div, sqrt, sin, cos)");
    } else {
        switch (userOperation) {
            case "add":
            case "diff":
            case "mult":
            case "div":
                let userNumber1 = parseFloat(prompt("Enter the first number:"));

                if (userNumber1 === null) {
                    alert('Goodbye, see you later.');
                    userContinue = false;
                    break;
                }

                while (isNaN(userNumber1)) {
                    userNumber1 = parseFloat(prompt("This is a bad digit. Please enter a correct digit."));
                }

                let userNumber2 = parseFloat(prompt("Enter the second number:"));

                if (userNumber2 === null) {
                    alert('Goodbye, see you later.');
                    userContinue = false;
                    break;
                }

                while (isNaN(userNumber2)) {
                    userNumber2 = parseFloat(prompt("This is a bad digit. Please enter a correct digit."));
                }

                if (!isNaN(userNumber2)) {
                    let result;
                    let operationSymbol;

                    if (userOperation === "add") {
                        operationSymbol = "+";
                        result = userNumber1 + userNumber2;
                    } else if (userOperation === "diff") {
                        operationSymbol = "-";
                        result = userNumber1 - userNumber2;
                    } else if (userOperation === "mult") {
                        operationSymbol = "*";
                        result = userNumber1 * userNumber2;
                    } else if (userNumber2 !== 0) {
                        operationSymbol = "/";
                        result = userNumber1 / userNumber2;
                    } else {
                        result = "Division by zero is not allowed.";
                    }

                    alert(`${userOperation}: ${userNumber1} ${operationSymbol} ${userNumber2} = ${result}`);
                }
                break;

            case "sqrt":
            case "sin":
            case "cos":
                let userNumber = parseFloat(prompt("Enter a number:"));

                if (userNumber === null) {
                    alert('Goodbye, see you later.');
                    userContinue = false;
                    break;
                }

                while (isNaN(userNumber)) {
                    userNumber = parseFloat(prompt("This is a bad digit. Please enter a correct digit."));
                }

                if (!isNaN(userNumber)) {
                    let result;

                    if (userOperation === "sqrt") {
                        result = userNumber < 0 ? "Square root of a negative number is not allowed." : Math.sqrt(userNumber);
                    } else if (userOperation === "sin") {
                        result = Math.sin(userNumber);
                    } else {
                        result = Math.cos(userNumber);
                    }

                    alert(`${userOperation} ${userNumber} = ${result}`);
                } else {
                    alert("The entered number is not valid. Goodbye.");
                }
                break;
        }
    }



    if (userContinue) {
        let userAsk = prompt("Do you want to continue working with me? (yes/no)");

        if (userAsk === null || userAsk.toLowerCase() !== "yes") {
            alert('Goodbye, see you later.');
            userContinue = false;
        }
    }


}
