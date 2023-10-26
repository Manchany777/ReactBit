import React, { useEffect, useState } from 'react';
import Test02Sub from './Test02Sub';

const Test02 = () => {

    const [isShow, setIsShow] = useState(false)

    const show = () => {
        setIsShow(!isShow)
    }
    
    return (
        <div>
            <button onClick={ show }>{isShow ? '숨기기' : '보이기'}</button>
            {
                isShow && <Test02Sub /> 
            }
        </div>
    );
};

export default Test02;