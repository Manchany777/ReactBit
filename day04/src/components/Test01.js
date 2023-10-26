import React, { useEffect, useState } from 'react';

const Test01 = () => {
    const names = '안효섭, 이제훈, 유연석, 김세정, 김태리, 여진구, 이동욱, 공유, 아이유, 이준기, 설인아'.split(',')
    const [name, setName] = useState('홍길동')
    const [age, setAge] = useState(25)

    const onName = () => {
        const index = Math.floor(Math.random() * 11) // 버림, 0~10까지의 난수
        setName(names[index])
    }
    const onAge = () => {
        setAge(age+1)
    }
    
    // 거의 사용x
    // 값이 변하기만 하면 실행 된다.
    // 불필요한 사용이 넘 많다.
    /*
    useEffect(() => {
        console.log('안녕하세요')
    })*/

    // 마운트될 때(=처음 실행될 때), 1번만 수행해라
    /*
    useEffect(() => {
        console.log('안녕하세요')
    }, [])*/

    // name의 값이 바뀔때만 수행
    // 원하는 시점(여기서는 name을 클릭했을 때)에만 동작이 수행되도록 함
    // age버튼은 실행x
    useEffect(() => {
        console.log('안녕하세요')
    }, [ name ])

    return (
        <div>
            <button onClick={ onName }>이름 변경</button>
            <button onClick={ onAge }>나이 증가</button>
            <hr/>
            <h1>{ name }</h1>
            <h1>{ age }</h1>
        </div>
    );
};

export default Test01;

/*
useEffect란?
- useEffect는 렌더링, 혹은 변수의 값 혹은 오브젝트가 달라지게 되면, 그것을 인지하고 업데이트를 해주는 함수이다.
- useEffect는 콜백 함수를 부르게 되며, 렌더링 혹은 값, 오브젝트의 변경에 따라 어떠한 함수 혹은 여러 개의 함수들을 동작시킬 수 있다.
- 렌더링 후 useEffect는 무조건 한번은 실행된다.

[형식] 
① 컴포넌트가 나타날 때 딱 1번만 함수가 호출
useEffect( () => {
}, [ ]);

② 특정 props가 바뀔 때마다 함수가 호출
useEffect( () => {
}, [ props ]);

useEffect 라는 Hook을 사용하여 할 수 있는 3가지 동작
- 컴포넌트가 마운트 됐을 때 (처음 나타났을 때)
- 언 마운트 됐을 때 (사라질 때)
- 업데이트될 때 (특정 props가 바뀔 때)

[ ]로 설정하면 컴포넌트가 처음 나타날 때만 useEffect에 등록한 함수가 호출 한다.

useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부른다. 
cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하면 되는데, 
[ ] 안에 내용이 비어 있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출된다.
*/