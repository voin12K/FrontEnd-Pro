// App.jsx
import React, { useState } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleDelete = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const handleSave = (newContact) => {
        setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
        setShowForm(false);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    return (
        <div>
            <ContactList onDelete={handleDelete} />
            <div>
                {showForm ? (
                    <ContactForm onSave={handleSave} onCancel={handleCancel} />
                ) : (
                    <button onClick={() => setShowForm(true)}>Додати новий контакт</button>
                )}
            </div>
        </div>
    );
};

export default App;
