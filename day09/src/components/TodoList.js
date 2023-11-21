import React from 'react';
import { useTodos } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos } = useTodos(); // 사용자가 만든 Hook

    return (
        <div>
            <h2>해야 할 일</h2>
            <ul>
                {
                    todos.map(todo => <TodoItem key={ todo.id } todo={ todo } />)
                }
            </ul>
        </div>
    );
};

export default TodoList;