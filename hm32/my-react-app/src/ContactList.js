import React from 'react';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>Телефон</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {contacts.map((contact) => (
                <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.username}</td>
                    <td>{contact.phone}</td>
                    <td>
                        <button onClick={() => onDelete(contact.id)}>Видалити</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ContactList;
