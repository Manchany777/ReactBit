import React from 'react';
import { useTodos } from '../contexts/TodoContext';

const TodoInput = () => {
    const { text, onInput, onAdd } = useTodos();

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) return
        onAdd(text)
        // onAdd() // 굳이 text 안넣어도 될 것 같다. why??
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type='text' value={ text } onChange={ onInput } placeholder='할 일을 입력하세요' />
            <button>추가</button>
        </form>
    );
};

export default TodoInput;