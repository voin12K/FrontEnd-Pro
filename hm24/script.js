const productsData = {
    electronics: [
        { name: 'Смартфон', info: 'Дуже крутий смартфон', price: 500 },
        { name: 'Ноутбук', info: 'Потужний ноутбук для роботи', price: 1000 },
    ],
    clothing: [
        { name: 'Футболка', info: 'Зручна футболка', price: 20 },
        { name: 'Джинси', info: 'Класні джинси', price: 50 },
    ],
};

function showProducts(category) {
    const productsBlock = document.getElementById('products');
    clearElement(productsBlock);

    const products = productsData[category];
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.textContent = product.name;
        productElement.addEventListener('click', () => showProductInfo(product));
        productsBlock.appendChild(productElement);
    });
}

function showProductInfo(product) {
    const productInfoBlock = document.getElementById('product-info');
    clearElement(productInfoBlock);

    const h2 = document.createElement('h2');
    h2.textContent = product.name;

    const p1 = document.createElement('p');
    p1.textContent = product.info;

    const p2 = document.createElement('p');
    p2.textContent = `Ціна: ${product.price}$`;

    const button = document.createElement('button');
    button.textContent = 'Купити';
    button.addEventListener('click', buyProduct);

    productInfoBlock.appendChild(h2);
    productInfoBlock.appendChild(p1);
    productInfoBlock.appendChild(p2);
    productInfoBlock.appendChild(button);
}

function buyProduct() {
    alert('Товар куплений!');
    const productInfoBlock = document.getElementById('product-info');
    clearElement(productInfoBlock);
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
