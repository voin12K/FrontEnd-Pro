// Contacts.js
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error('Error fetching contacts:', error));
    }, []);

    const handleDelete = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const handleSaveContact = (newContact) => {
        setContacts([...contacts, newContact]);
        setShowForm(false);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <h1>Contacts</h1>
            <table>
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => handleDelete(contact.id)}>Видалити</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div>
                <button onClick={toggleForm}>Додати контакт</button>
            </div>

            {showForm && <ContactForm onSaveContact={handleSaveContact} />}
        </div>
    );
};

export default Contacts;
