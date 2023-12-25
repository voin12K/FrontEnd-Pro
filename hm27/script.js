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

    // Clear the order info block
    clearElement(document.getElementById('order-info'));
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

    // Check for required fields
    if (!pib || !city || !novaPoshta || !payment || !quantity) {
        alert('Будь ласка, заповніть всі обов\'язкові поля.');
        return;
    }

    // Display order information
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

    // Save order to local storage
    const order = {
        date: new Date().toLocaleString(),
        price: calculateTotalPrice(product, quantity),
        details: {
            product: product.name,
            pib,
            city,
            novaPoshta,
            payment: payment.value,
            quantity,
            comment,
        },
    };

    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    orderHistory.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

    // Update order history display
    showOrderHistory();
}

function showOrderHistory() {
    // Retrieve order history from local storage or initialize an empty array
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

    // Get references to HTML elements
    const productsBlock = document.getElementById('products');
    const productInfoBlock = document.getElementById('product-info');

    // Clear product and product info blocks
    clearElement(productsBlock);
    clearElement(productInfoBlock);

    // Get or create the order history block in the HTML
    let orderHistoryBlock = document.getElementById('order-history');
    if (!orderHistoryBlock) {
        const orderHistoryDiv = document.createElement('div');
        orderHistoryDiv.id = 'order-history';
        orderHistoryBlock = orderHistoryDiv;
        document.body.appendChild(orderHistoryBlock);
    } else {
        clearElement(orderHistoryBlock);
    }

    // Check if there are no orders and display a message
    if (orderHistory.length === 0) {
        orderHistoryBlock.textContent = 'Немає замовлень.';
    } else {
        // Iterate through each order and create HTML elements to display order details
        orderHistory.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.className = 'order';
            orderElement.textContent = `Дата: ${order.date}, Ціна: ${order.price} грн`;

            // Add a click event listener to show order details when clicked
            orderElement.addEventListener('click', () => showOrderDetails(order));

            // Append the order element to the order history block
            orderHistoryBlock.appendChild(orderElement);
        });
    }
}


function showOrderDetails(order) {
    console.log('Show Order Details Clicked');
    const productInfoBlock = document.getElementById('product-info');
    clearElement(productInfoBlock);

    const orderDetails = document.createElement('div');
    orderDetails.innerHTML = `
        <h2>Деталі замовлення</h2>
        <p><strong>Дата:</strong> ${order.date}</p>
        <p><strong>Ціна:</strong> ${order.price} грн</p>
        <p><strong>Товар:</strong> ${order.details.product}</p>
        <p><strong>ПІБ покупця:</strong> ${order.details.pib}</p>
        <p><strong>Місто:</strong> ${order.details.city}</p>
        <p><strong>Склад Нової пошти:</strong> ${order.details.novaPoshta}</p>
        <p><strong>Спосіб оплати:</strong> ${order.details.payment}</p>
        <p><strong>Кількість:</strong> ${order.details.quantity}</p>
        <p><strong>Коментар:</strong> ${order.details.comment}</p>
        
        <button onclick="deleteOrder('${order.date}')">Видалити замовлення</button>
    `;
    productInfoBlock.appendChild(orderDetails);
}


function deleteOrder(orderDate) {
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const updatedOrderHistory = orderHistory.filter(order => order.date !== orderDate);
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrderHistory));
    showOrderHistory();
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

function calculateTotalPrice(product, quantity) {
    return product.price * quantity;
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

