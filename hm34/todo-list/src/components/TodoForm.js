import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

function TodoForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
