console.log("Welcome to the calculator!");
let userContinue = 1;
while (userContinue === 1 ) {
    let userOperation = prompt("What action do you want to perform? (add, diff, mult, div, sqrt, sin, cos)");

    while (userOperation !== 'add' && userOperation !== 'diff' && userOperation !== 'mult' && userOperation !== 'div' && userOperation !== 'spqr' && userOperation !== 'sin' && userOperation !== 'cos') {
        if (userOperation === null) {
            break;
        }
        userOperation = prompt("I don't recognize your operation. Please choose correct operation like:  (add, diff, mult, div, sqrt, sin, cos)");
    }

    switch (userOperation) {
        case "add":
        case "diff":
        case "mult":
        case "div":
            let userNumber1 = parseFloat(prompt("Enter the first number:"));
            while (isNaN(userNumber1)) {
                userNumber1 = parseFloat(prompt("This is bad digit. Please enter correct digit"));
            }

            let userNumber2 = parseFloat(prompt("Enter the first number:"));
            while (isNaN(userNumber2)) {
                userNumber2 = parseFloat(prompt("This is bad digit. Please enter correct digit"));
            }
            if (!isNaN(userNumber2)) {
                const operationSymbol = userOperation === "add" ? "+" :
                    userOperation === "diff" ? "-" :
                        userOperation === "mult" ? "*" :
                            "/";
                const result = userOperation === "add" ? userNumber1 + userNumber2 :
                    userOperation === "diff" ? userNumber1 - userNumber2 :
                        userOperation === "mult" ? userNumber1 * userNumber2 :
                            userNumber2 === 0 ? "Division by zero is not allowed." : userNumber1 / userNumber2;
                console.log(`${userOperation}: ${userNumber1} ${operationSymbol} ${userNumber2} = ${result}`);
            }
            break;
        case "sqrt":
        case "sin":
        case "cos":
            let userNumber = parseFloat(prompt("Enter a number:"));
            while (isNaN(userNumber)) {
                userNumber = parseFloat(prompt("This is bad digit. Please enter correct digit"));
            }
            if (!isNaN(userNumber)) {
                const result = userOperation === "sqrt" ? (userNumber < 0 ? "Square root of a negative number is not allowed." : Math.sqrt(userNumber)) :
                    userOperation === "sin" ? Math.sin(userNumber) :
                        Math.cos(userNumber);
                console.log(`${userOperation} ${userNumber} = ${result}`);
            } else {
                console.log("The entered number is not valid. Goodbye.");
            }
            break;
    }
    userAsk = prompt("Do you want continue work with me? yes/no");
    if (userAsk === "yes"){
    } else {
        console.log( 'Good by, see you later.');
        break;
    }
}
