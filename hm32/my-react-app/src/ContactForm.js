import React, { useState } from 'react';

const ContactForm = ({ onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    const handleSave = () => {
        onSave({ name, username: surname, phone });
        setName('');
        setSurname('');
        setPhone('');
    };

    return (
        <div>
            <h2>Форма додавання контакту</h2>
            <label>Ім'я:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Прізвище:</label>
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <label>Телефон:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <div className="form-buttons">
                <button onClick={handleSave}>Зберегти</button>
                <button onClick={onCancel}>Скасувати</button>
            </div>
        </div>
    );
};

export default ContactForm;
