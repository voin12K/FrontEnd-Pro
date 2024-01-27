import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setContacts(data));
  }, []);

  const handleDelete = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  const handleSave = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
      <div>
        <h1>Contact List</h1>
        <ContactList contacts={contacts} onDelete={handleDelete} />
        <button onClick={() => setShowForm(true)}>Додати контакт</button>
        {showForm && <ContactForm onSave={handleSave} onCancel={handleCancel} />}
      </div>
  );
};

export default App;
