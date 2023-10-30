import React, { useState, useMemo, useEffect } from 'react';

const user = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '김수혁' },
    { id: 3, name: 'cat' },
    { id: 4, name: 'DAUM' },
    { id: 5, name: '김수혁' },
    { id: 6, name: 'daum' },
    { id: 7, name: '마동석' },
    { id: 8, name: 'naver' },
    { id: 9, name: '김희선' },
    { id: 10, name: 'NAVER' },
]

const Test05 = () => {
    const [data, setData] = useState(user)
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')
    
    // 검색 버튼
    /*
    const onSearch = () => { // 아이템(user)의 이름을 모두 소문자로 바꾼후 text가 포함된 것을 모두 필터링해라
        setData(user.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
        //setData(user.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 )) // indexOf()를 쓰는 방식
        // indexOf() 주의점 : 현재 값이 없으면 -1를 반환한다. 그래서, -1이 아닌 것만 들고오도록 처리해야 함
    }*/

    // 검색 버튼 - useMemo()
    useMemo(()=> {
        // return setData(user.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
        return setData(user.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 ))
    }, [search])

    const onSearch = () => {
        setSearch(text)
    }

    // 검색 기능을 누르지 않고 글자가 바뀌면 바로 바로 결과가 나온다.
    useEffect(() => {
        setData(user.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 ))
    }, [text])

    return (
        <div>
            <input type='text' value={ text } onChange={ e => { setText(e.target.value) } } />
            <button onClick={ onSearch }>검색</button>
            <ul>
                {
                    data.map(item => <li key={ item.id }>
                        { item.id } / { item.name }
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test05;