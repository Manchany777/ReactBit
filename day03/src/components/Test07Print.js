import React from 'react';

const Test07Print = ({data, onClick}) => {
    const {name, age, addr, phone} = data
    const { onPrev, onNext } = onClick

    return (
        <div>
            <li>이름 : {name} </li>
            <li>나이 : {age} </li>
            <li>주소 : {addr} </li>
            <li>전화번호 : {phone} </li>
            <button onClick={ onPrev }>이전</button>
            <button onClick={ onNext }>다음</button>
        </div>
    );
};

export default Test07Print;