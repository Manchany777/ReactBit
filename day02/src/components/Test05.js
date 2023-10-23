import React, { useState } from 'react';

const Test05 = () => {
    const [num, setNum] = useState(1)
    
    const onAdd = (num) => {
        setNum(++num)
    }

    return (
        <div>
            <h2>숫자 : { num }</h2>
            <p>
                <button onClick={ () => onAdd(num) }>1씩 증가</button>
            </p>
        </div>
    );
};

export default Test05;