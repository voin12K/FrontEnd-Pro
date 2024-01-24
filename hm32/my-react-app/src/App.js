document.addEventListener('DOMContentLoaded', function () {
  const contactsTable = document.getElementById('contactsTable');
  const addContactBtn = document.getElementById('addContactBtn');
  const contactForm = document.getElementById('contactForm');
  const saveContactBtn = document.getElementById('saveContactBtn');
  const cancelContactBtn = document.getElementById('cancelContactBtn');
  const contactFormElements = document.getElementById('form').elements;

  let contacts = [];

  addContactBtn.addEventListener('click', showContactForm);
  cancelContactBtn.addEventListener('click', hideContactForm);
  saveContactBtn.addEventListener('click', saveContact);

  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        contacts = data;
        displayContacts(contacts);
      });

  function displayContacts(contacts) {
    const tbody = contactsTable.querySelector('tbody');
    tbody.innerHTML = '';

    contacts.forEach(contact => {
      const row = tbody.insertRow();
      row.insertCell(0).textContent = contact.name;
      row.insertCell(1).textContent = contact.username;
      row.insertCell(2).textContent = contact.phone;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Видалити';
      deleteBtn.addEventListener('click', () => deleteContact(contact.id, row));
      row.insertCell(3).appendChild(deleteBtn);

      row.setAttribute('data-id', contact.id);
    });
  }

  function showContactForm() {
    contactForm.style.display = 'block';
  }

  function hideContactForm() {
    contactForm.style.display = 'none';
    clearForm();
  }

  function clearForm() {
    contactFormElements.name.value = '';
    contactFormElements.surname.value = '';
    contactFormElements.phone.value = '';
  }

  function saveContact() {
    const name = contactFormElements.name.value;
    const surname = contactFormElements.surname.value;
    const phone = contactFormElements.phone.value;

    if (!name || !surname || !phone) {
      alert('Будь ласка, заповніть всі поля форми.');
      return;
    }

    const newContact = {
      id: contacts.length + 1,
      name: name,
      username: surname,
      phone: phone,
    };
    contacts.push(newContact);
    displayContacts(contacts);
    hideContactForm();
  }
  function deleteContact(contactId, row) {
    row.parentNode.removeChild(row);
  }
});
