import React from 'react';

const Test07Input = ({data, onInput, onNext}) => {
    const {name, age, addr, phone} = data

    return (
        <div>
            <p>이름 : <input name='name' value={name} onChange={ onInput } /></p>
            <p>나이 : <input name='age' value={age} onChange={ onInput } /></p>
            <p>주소 : <input name='addr' value={addr} onChange={ onInput }  /></p>
            <p>핸드폰 : <input name='phone' value={phone} onChange={ onInput } /></p>
            <button onClick={ onNext }>다음</button>
        </div>
    );
};

export default Test07Input;