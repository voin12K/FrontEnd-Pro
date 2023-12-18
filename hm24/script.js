
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
    productsBlock.innerHTML = '';

    const products = productsData[category];
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = product.name;
        productElement.onclick = () => showProductInfo(product);
        productsBlock.appendChild(productElement);
    });
}

function showProductInfo(product) {
    const productInfoBlock = document.getElementById('product-info');
    productInfoBlock.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.info}</p>
        <p>Ціна: ${product.price}$</p>
        <button onclick="buyProduct()">Купити</button>
    `;
}

function buyProduct() {
    alert('Товар куплений!');
    const productInfoBlock = document.getElementById('product-info');
    productInfoBlock.innerHTML = '';
}
