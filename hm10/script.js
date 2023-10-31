const arr = [1, "asd", "qwe", [4, "rty"]];
deleteElement()
console.log(arr);
function deleteElement() {
    const item_to_remove = prompt("");
    const index = parseInt(item_to_remove) - 1;

    if (!isNaN(index) && index >= 0 && index < arr.length) {
        arr.splice(index, 1);
    } else {
        alert("input is not correct");
    }
}
