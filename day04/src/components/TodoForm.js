import React, { useRef, useState } from 'react';

import styles from '../css/TodoForm.module.css';

const TodoForm = ({ onAdd }) => {
    const [text, setText] = useState('')
    const textRef = useRef()

    const onInput = (e) => {
        setText(e.target.value) 
    }

    const onSubmit = (e) => {
        e.preventDefault(); 

        if(!text) return;

        onAdd(text)
        
        setText('') // 초기화

        textRef.current.focus();
    }

    return (
        <div>
            <form className={ styles.TodoForm } onSubmit={ onSubmit }>
                <input type='text' value={ text } onChange={ onInput } ref={ textRef } placeholder='해야 할 일을 입력하시오'/>
                <button type='submit'>추가</button>
            </form>
        </div>
    );
};

export default TodoForm;