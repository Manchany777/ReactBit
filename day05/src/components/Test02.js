import { useState, useEffect } from 'react';
import axios from 'axios'

const Test02 = () => {
    const [id, setId] = useState(1) // 초기값 1로 세팅 ('1') 라고 해도 됨
    const [dto, setDto] = useState({}) // 특정 번호 하나만 쥐고 있는 dto변수 선언하고 빈 객체 넣음
    const [search, setSearch] = useState(1) // search변수 기본값 1

    /* => 이번에는 함수 구현부를 따로 만들지 않고, onChange 이벤트 속성에 집어넣었다.
    const onInput = (e) => {
        setId(e.target.value)
    }*/
    
    const onSearch = (id) => {
        setSearch(id)
    }

    useEffect(() => { // 딱 한번만 읽도록 useEffect
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setDto(res.data))
    //}, [search]) // search버튼이 눌릴때마다 useEffect가 실행되도록
    //}, [id]) // 이렇게 search대신 id를 적으면 입력값(id값)이 바뀔때마다 바로바로 반영된다.
    }, [id, search])  // 이렇게 두 개 걸어도 되지만, 과부하 걸리기때문에 권장하지는 않는다.

    return (
        <div>
            <input type='text' value={ id } onChange={ e => setId(e.target.value) }/>
            <button onClick={ () => onSearch(id) }>검색</button>
            <hr/>
            <h3>{dto.id} / {dto.title}</h3>
        </div>
    );
};

export default Test02;