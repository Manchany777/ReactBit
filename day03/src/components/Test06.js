import React, { useRef, useState } from 'react';

const Test06 = () => {
    const [data, setData] = useState({ // 하나의 DTO와 같음  const [userDTO, setUserDTO] 라고 해도 됨
        name: '홍길동',
        id: 'hong',
        pwd: '111'
    })

    const nameRef = useRef()

    const { name, id, pwd } = data

    const onInput = (e) => {
        const { name, value } = e.target
        // <input type='text' name='id' value={ id } /> 에서의 name과 value

        setData({
            ...data, // 스프레드 연산자로 data째로 객체를 복사한 후(id, name, pwd의 기존 데이터를 복사함), 원하는 것만 수정한다.
                     // 복사하지 않을시, 이전에 있던 값은 초기화 된다. (즉, 현재 입력한 값이 아닌 다른 값은 지워짐)
            [name]: value // [name] - name속성(name='name', name='id', name='pwd' ) 사용시 문자열대로 값을 가져옴
            // ['id'] : hong <== 같은 setData 안이니까 data 생략가능 ==> data['id'] : hong
        }) 
    }

    const onReset = () => {
    // [...  : 복사하기 {... : 덮어쓰기 (해당 내용은 ES6에서 참고)
        setData({
            name: '홍길동',
            id: 'hong',
            pwd: '111'
        })

        nameRef.current.focus()
    }

    return (
        <div>
            <table border='1' cellPadding='5' cellSpacing='0'>
                <tr>
                    <th width='100'>이름</th>
                    <td>
                        <input type='text' name='name' value={ name } onChange={ onInput } ref={ nameRef } />
                    </td>
                </tr>

                <tr>
                    <th width='100'>아이디</th>
                    <td>
                        <input type='text' name='id' value={ id } onChange={ onInput } />
                    </td>
                </tr>

                <tr>
                    <th width='100'>비밀번호</th>
                    <td>
                        <input type='password' name='pwd' value={ pwd } onChange={ onInput } />
                    </td>
                </tr>

                <tr>
                    <td colSpan='2' align='center'>
                        <button onClick={ onReset }>초기화</button>
                    </td>
                </tr>
            </table>
            <hr/>
            <h3>이름 : {name} </h3>
            <h3>아이디 : {id} </h3>
            <h3>비밀번호 : {pwd} </h3>
        </div>
    );
};

export default Test06;