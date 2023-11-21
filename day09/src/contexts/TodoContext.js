import React, { createContext, useContext, useState, useRef } from 'react';

//export const TodoContext = createContext();

// (사용자가 만든) 훅 사용
const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, text: '공부하기', isChk: false },
        { id: 2, text: '운동하기', isChk: false },
        { id: 3, text: '노래하기', isChk: true },
        { id: 4, text: '산책하기', isChk: false },
        { id: 5, text: '쇼핑하기', isChk: true },
    ])

    const[text,  setText] = useState('')
    const seq = useRef(todos.length + 1);

    //체크박스
    const onToggle = (id) => {
        const newData = todos.map(todo => todo.id === id ? {...todo, isChk: !todo.isChk} : todo )
        setTodos(newData)
    }

    // 삭제
    const onDel = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    //입력
    const onInput = (e) => {
        const { value } = e.target
        setText(value)
    }

    // 추가
    const onAdd = () => {
        setTodos([
            ...todos,
            {
                id : seq.current++,
                text : text,
                idChk : false
            }
        ])

        setText('')
    }

    return (
        <TodoContext.Provider value={{ todos, onToggle, onDel, text, onInput, onAdd }}>
            { children }
        </TodoContext.Provider>
    );
};

export default TodoProvider;