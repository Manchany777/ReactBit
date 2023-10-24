import React, { useRef, useState } from 'react';

const Test01 = () => {
    const [id, setId] = useState('') // id 초기값 설정 및 값이 바뀔때마다 보관하기 위한 useState Hook
    const [pwd, setPwd] = useState('')

    const idRef = useRef()

    const onInputId = (e) => {
        // 비구조 할당
        // input 태그안에 있는 모든 속성들(type, value, onChange) 중에서 value만 가져온다.
        const { value } = e.target // 이벤트를 발생시킨 녀석의 정보를 가져옴 (여기서는 <input type='text' value={ id } onChange={ onInputId }/>)
        setId(value) // e.target으로 가져온 value값을 setId로 넘겨버림
    }
    const onInputPwd = (e) => {
        const { value } = e.target // 이벤트가 발생한 대상
        setPwd(value)
    }
    const onReset = () => {
        setId('')
        setPwd('')

        idRef.current.focus() // 포커스
    }

    return (
        <div>
            아이디 : <input type='text' value={ id } onChange={ onInputId } ref={ idRef }/>
            <br /><br />
            비밀번호 : <input type='password' value={ pwd } onChange={ onInputPwd }/>
            <br /><br />
            <button disabled={ pwd.length < 6 }>로그인</button> &emsp;
            <button onClick={ onReset }>초기화</button>
        </div>
    );
};

export default Test01;

/*
Hooks - useRef
- 리액트에서 제공하는 대표적인 훅 중 하나이다.

- JavaScript 를 사용 할 때에는, 우리가 특정 DOM 을 선택해야 하는 상황에 
  getElementById, querySelector 같은 DOM Selector 함수를 사용해서 DOM 을 선택한다.
  리액트에서는 직접 DOM 요소에 접근해야 할 때, useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능하다.

- useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능하다.

- input태그와 같이 사용자가 값을 직접 입력하는 html태그에 직접적으로 접근하여 값을 가져오는 것을 가능하게 한다.


리액트 컴포넌트는 State가 변할 때마다 다시 렌더링이 되면서 컴포넌트 내부 변수들이 초기화 된다.
하지만 Ref안에 있는 값은 아무리 변경해도 컴포넌트는 다시 렌더링 되지 않는다.
즉, State 대신 Ref를 사용한다면 불필요한 렌더링을 막을 수 있다.
또한 컴포넌트가 아무리 렌더링이 되어도 Ref안에 저장되어 있는 값은 변화되지 않고 그대로 유지 된다.
그래서 렌더링을 발생시키지 말아야 하는 값을 다룰 때 정말 편리하다.

1. Ref 객체를 만들어준다. 
const nameRef = useRef();

2. 선택하고 싶은 DOM에 속성으로 ref 값을 설정해준다. 
<input  ref = { nameRef } />

3. Ref 객체의 current 값은 우리가 선택하고자 하는 DOM을 가리킨다.
  그리고 포커싱을 해주는 DOM API focus()를 호출한다.
*/