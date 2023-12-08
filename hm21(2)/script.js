for (let row = 1; row <= 10; row++) {
    let rowString = "";
    for (let col = 1; col <= 10; col++) {
        const number = (row - 1) * 10 + col;
        rowString += number + "\t";
    }
    console.log(rowString);
}
