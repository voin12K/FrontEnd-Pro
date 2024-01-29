// ContactForm.js
import React, { useState } from 'react';

const ContactForm = ({ onSaveContact }) => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (formData.name && formData.username && formData.phone) {

            const newContact = {
                id: Date.now(),
                name: formData.name,
                username: formData.username,
                phone: formData.phone,
            };

            onSaveContact(newContact);

            setFormData({
                name: '',
                username: '',
                phone: '',
            });
        } else {
            alert('Будь ласка, заповніть всі поля.');
        }
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            username: '',
            phone: '',
        });
    };

    return (
        <div>
            <h2>Форма додавання нового контакту</h2>
            <form>
                <label>
                    Ім'я:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Прізвище:
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Телефон:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </label>
                <br />
                <button type="button" onClick={handleSubmit}>Зберегти</button>
                <button type="button" onClick={handleCancel}>Скасувати</button>
            </form>
        </div>
    );
};

export default ContactForm;
