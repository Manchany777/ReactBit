import React, { useRef, useState } from 'react';
import Test07Input from './Test07Input';
import Test07Print from './Test07Print';
import Test07Output from './Test07Output';

const Test07Main = () => {
    const [data, setData] = useState({
        id: '',
        age: '',
        addr: '',
        phone: ''
    })
    const [count, SetCount] = useState(1)

    //const nameRef = useRef()

    const onInput = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }

    const onNext = () => {
        SetCount(count+1)
    };
    const onPrev = () => {
        SetCount(count-1)
    }


    return (
        <div>
            { count === 1 && <Test07Input data={data} onInput={ onInput } onNext={ onNext } />}
            { count === 2 && <Test07Print data={data} onClick={ {onPrev, onNext} } /> }
            { count === 3 && <Test07Output data={data} /> }
        </div>
    );
};

export default Test07Main;