import React, { useRef, useState, useEffect } from 'react';

import styles from '../css/Todos.module.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
    

        //const [data, setData] = useState([]) // TodoForm.js에서 모와온 데이터들의 집합 -> TodoList.js로 보내기 위함
    // 로컬 스토리지 읽어오기
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data'))||[]) // 배열에 아무것도 없으면 빈 배열을 넣도록 함 
        // 로컬 스토리지에 있는 'data'라는 이름을 가진 데이터를 가져오는데, 
        // 배열이니까 Json형식을 가지고 파싱한 후 setData에 넣는다.
    // 로컬 스토리지에 저장하기
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data]) // 데이터의 내용이 바뀔때마다 data에 저장해라

    const seq = useRef(data.length + 1) // TodoList.js에서 key값으로 쓰기 위한 seq객체

    const onAdd = (text) => {
        setData([...data,  // 배열안에 있는 애들은 수정이 아니라 추가
                //{text: text} // 배열로 보내는건 객체이기때문에 객체로 감싸야 한다.    
                {
                    seq: seq.current++,
                    text  // 중복되는 이름은 생략하고 한 번만 써도 된다.
                }
        ])
    }
    const onDel = (seq)  => {
        setData(data.filter(item => item.seq !== seq))
    }

    return (
        <div className={ styles.Todos }>
            <h1>일정관리</h1>
            <TodoForm onAdd={ onAdd } />
            <TodoList data={ data }  onDel={ onDel } />
        </div>
    );
};

export default Todos;

/*
데이터 읽기, 쓰기

웹 스토리지
HTML5에서 추가된 기술로 로컬스토리지와 세션스토리지로 구분된다.

특징
- 웹 스토리지는 Key와 Value 형태로 이루어졌다.
- 웹 스토리지는 클라이언트에 대한 정보를 저장한다.
- 웹 스토리지는 로컬에만 정보를 저장하고 쿠키는 서버와 로컬에 정보를 저장한다.

종류
로컬스토리지 (localStorage) - 클라이언트에 대한 정보를 영구적으로 저장
세션스토리지 (sessionStorage) - 세션 종료 시(브라우저 닫을 경우) 클라이언트에 대한 정보 삭제

장점
- 서버에 불필요하게 데이터를 저장하지 않는다. (백엔드에 절대로 전송되지 않는다.)
- 저장 가능한 데이터의 용량이 크다. (약 5Mb, 브라우저마다 차이 존재)

단점
- HTML5를 지원하지 않는 브라우저의 경우 사용 불가. (현재는 거의 없다고 봐야 한다.)
*/