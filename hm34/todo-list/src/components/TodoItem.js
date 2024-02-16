import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';

function TodoItem({ todo }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default TodoItem;
