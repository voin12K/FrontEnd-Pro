function calculSum() {
    let sum = 0;

    return function (number) {
        sum += number;
        return sum;
    }
}

const sum = calculSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20))
