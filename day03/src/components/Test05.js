import React, { useState } from 'react';
import Name from './Name';
import Output from './Output';
import Fruit from './Fruit';

const Test05 = () => {
    const [name, setName] = useState('') // 원하면 useState('홍길동')
    const [fruit, setFruit] = useState('') // useState('딸기') 처럼 초깃값 지정 가능

    const onInputName = (e) => {
        const { value } = e.target
        setName(value)
    }
    const onInputFruit = (e) => {
        const { value } = e.target
        setFruit(value)
    }

    return (
        <div>
            <Name name={name} onInputName={ onInputName } />
            <br/>
            <Fruit fruit={fruit} onInputFruit={ onInputFruit } />
            <br/>
            <Output name={name} fruit={fruit} />
        </div>
    );
};

export default Test05;