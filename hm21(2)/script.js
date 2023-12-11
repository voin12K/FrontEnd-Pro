function createTable() {
    const table = document.createElement('table');
    table.setAttribute('border', '1');
    let number = 1;

    for (let i = 0; i < 10; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const td = document.createElement('td');
            td.textContent = number++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    document.body.appendChild(table);
}

window.onload = createTable;