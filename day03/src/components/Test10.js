import React, { useReducer, useRef, useState } from 'react';

const Test10 = () => {
    const nameRef = useRef() // 포커스 잡기위해 만듦
    const seq = useRef(1) // 시퀀스 객체 잡기위해 만듦 - 1 2 3 4 5 6 ...

    const [data, setData] = useState([]) // 전체 데이터 (배열)(초기값 없음)
    const [dto, setDto] = useState({     // 한 사람분의 데이터
        name : '',
        age : ''
    })
    const { name, age } = dto            // 한 사람분의 데이터를 구조분해 할당함

    const onInput = (e) => {
        const {name, value} = e.target
        setDto({        //  입력할 때에는 한 사람분의 데이터를 입력해야하니까 setData가 아니라 setDTO
            ...dto,     // 여기도 data가 아니라 dto
            [name]:value
        })
    }

    const onAdd = (e) => {
        e.preventDefault(); // 현재 이벤트의 동작을 막음(못가게) (즉, 브라우저의 고유의 동작을 중단시키는 역할)

        // 둘 중에 데이터 하나만 없어도 나가도록 함
        if(!name || !age) return

        // 배열은 덮어쓰기가 아니라 추가
        setData([...data, 
            { 
                seq: seq.current++,
                name: name, 
                age: age
            }])

        // 초기화
        setDto({
            name: '',
            age: ''
        })

        nameRef.current.focus();
    }

    return (
        <div>
            <form onSubmit={ onAdd }>
                이름 : <input type='text' name='name' value={ name } onChange={ onInput } ref={ nameRef }/>
                <br/>
                나이 : <input type='text' name='age' value={ age } onChange={ onInput } />
                <br/>
                <button type='submit'>추가</button>
            </form>
            <hr/>
            <ul>
                {
                    data.map((item, index) =>  {return <li key={ item.seq }>
                        {item.seq} / { item.name } / { item.age }
                    </li> })
                }
            </ul>
        </div>
    );
};

export default Test10;