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

    const orderForm = createOrderForm(product);
    productInfoBlock.appendChild(orderForm);

    // Очищення блоку інформації про замовлення
    clearOrderInfo();
}

function createOrderForm(product) {
    const form = document.createElement('form');
    form.id = 'order-form';

    const pibInput = createInput('text', 'pib', 'ПІБ покупця');
    const cityInput = createSelect('city', 'Місто', ['Київ', 'Львів', 'Одеса', 'Харків']);
    const novaPoshtaInput = createInput('text', 'novaPoshta', 'Склад Нової пошти для надсилання');
    const paymentInput = createRadioGroup('payment', ['Післяплата', 'Оплата банківською карткою']);
    const quantityInput = createInput('number', 'quantity', 'Кількість продукції, що купується', 1);
    const commentInput = createInput('text', 'comment', 'Коментар до замовлення');

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Підтвердити замовлення';
    submitButton.addEventListener('click', () => confirmOrder(product));

    form.appendChild(pibInput);
    form.appendChild(cityInput);
    form.appendChild(novaPoshtaInput);
    form.appendChild(paymentInput);
    form.appendChild(quantityInput);
    form.appendChild(commentInput);
    form.appendChild(submitButton);

    return form;
}

function confirmOrder(product) {
    const pib = document.getElementById('pib').value;
    const city = document.getElementById('city').value;
    const novaPoshta = document.getElementById('novaPoshta').value;
    const payment = document.querySelector('input[name="payment"]:checked');
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;

    // Перевірка на обов'язкові поля
    if (!pib || !city || !novaPoshta || !payment || !quantity) {
        alert('Будь ласка, заповніть всі обов\'язкові поля.');
        return;
    }

    // Виведення інформації про замовлення
    const orderInfoBlock = document.getElementById('order-info');
    clearElement(orderInfoBlock);

    const orderInfo = document.createElement('div');
    orderInfo.innerHTML = `
        <h2>Інформація про замовлення</h2>
        <p><strong>Товар:</strong> ${product.name}</p>
        <p><strong>ПІБ покупця:</strong> ${pib}</p>
        <p><strong>Місто:</strong> ${city}</p>
        <p><strong>Склад Нової пошти:</strong> ${novaPoshta}</p>
        <p><strong>Спосіб оплати:</strong> ${payment.value}</p>
        <p><strong>Кількість:</strong> ${quantity}</p>
        <p><strong>Коментар:</strong> ${comment}</p>
    `;

    orderInfoBlock.appendChild(orderInfo);
}

function createInput(type, id, label, defaultValue) {
    const div = document.createElement('div');

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.required = true;
    if (defaultValue) {
        input.value = defaultValue;
    }

    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    labelElement.setAttribute('for', id);

    div.appendChild(labelElement);
    div.appendChild(input);

    return div;
}

function createSelect(id, label, options) {
    const div = document.createElement('div');

    const select = document.createElement('select');
    select.id = id;
    select.required = true;

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.text = optionText;
        select.appendChild(option);
    });

    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    labelElement.setAttribute('for', id);

    div.appendChild(labelElement);
    div.appendChild(select);

    return div;
}

function createRadioGroup(name, options) {
    const div = document.createElement('div');

    options.forEach(optionText => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = name;
        input.value = optionText;
        input.required = true;

        const labelElement = document.createElement('label');
        labelElement.textContent = optionText;

        div.appendChild(input);
        div.appendChild(labelElement);
    });

    return div;
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
