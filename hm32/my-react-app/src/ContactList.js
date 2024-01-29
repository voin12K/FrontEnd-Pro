// ContactList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = ({ onDelete }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // Отримуємо дані з API при завантаженні компонента
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setContacts(response.data))
            .catch(error => console.error('Error fetching contacts', error));
    }, []);

    const handleDelete = (id) => {
        onDelete(id);
    };

    return (
        <div>
            <h2>Contact List</h2>
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
        </div>
    );
};

export default ContactList;
