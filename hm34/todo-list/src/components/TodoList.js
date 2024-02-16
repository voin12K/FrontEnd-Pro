import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../thunks';
import TodoItem from './TodoItem';

function TodoList() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;
