class SuperMath {
    check(obj) {
        if (this.isValidOperation(obj.znak)) {
            const result = this.calculate(obj.X, obj.Y, obj.znak);
            console.log(`Result: ${result}`);
        } else {
            console.log('Invalid mathematical operator entered.');
            this.input(obj);
        }
    }

    input(obj) {
        const newX = parseFloat(prompt('Enter a new value for X:'));
        const newY = parseFloat(prompt('Enter a new value for Y:'));
        const newZnak = prompt('Enter a mathematical operator (+, -, /, *, %):');

        const newObj = { X: newX, Y: newY, znak: newZnak };
        this.check(newObj);
    }

    isValidOperation(znak) {
        const validOperators = ['+', '-', '/', '*', '%'];
        return validOperators.includes(znak);
    }

    calculate(X, Y, znak) {
        switch (znak) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '/':
                return X / Y;
            case '*':
                return X * Y;
            case '%':
                return X % Y;
            default:
                return NaN;
        }
    }
}

const obj = { X: 12, Y: 3, znak: '/' };
const p = new SuperMath();
p.check(obj);
