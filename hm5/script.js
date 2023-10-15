console.log("Welcome to calculator!")
let userOperation = prompt("What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos");

if (userOperation === null) {
    console.log("Good by, see you later.");
} else {
    if (userOperation === "add" && "diff" && "mult" && "div") {
        const userNumber1 = parseFloat(prompt("first number:"));
        const userNumber2 = parseFloat(prompt("first number::"));

        if (!isNaN(userNumber1) && !isNaN(userNumber2)){
            if (userOperation === "add") {
                console.log("sum: " + userNumber1 + " + " + userNumber2 + " = " + (userNumber1 + userNumber2));
            }
            if (userOperation === "diff") {
                console.log("diff: " + userNumber1 + " - " + userNumber2 + " = " + (userNumber1 - userNumber2));
            }
            if (userOperation === "mult") {
                console.log("mult: " + userNumber1 + " * " + userNumber2 + " = " + (userNumber1 * userNumber2));
            }
            if (userOperation === "div") {
                console.log("div: " + userNumber1 + " / " + userNumber2 + " = " + (userNumber1 / userNumber2));
            }

            console.log("Good by, see you later.")
        } else {
            console.log("This is bad digit, good by")
        }
    } else {
        const userNumber = parseFloat(prompt("number:"));
        if (!isNaN(userNumber)) {
            if (userOperation === "sqrt"){
                console.log("sqrt " + userNumber + " = " + Math.sqrt(userNumber));
            }
            if (userOperation === "sin"){
                console.log("sin " + userNumber + " = " + Math.sin(userNumber));
            }
            if (userOperation === "cos"){
                console.log("cos " + userNumber + " = " + Math.cos(userNumber));
            }

            console.log("Good by, see you later.")
        } else {
            console.log("This is bad digit, good by")
        }
    }
}
