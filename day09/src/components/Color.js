import React, { useContext } from 'react';
import { ColorContext } from '../contexts/ColorContext';
import { CountContext } from '../contexts/CountContext';

const Color = () => {
    const { color, onRed, onGreen, onBlue, onMagenta } = useContext(ColorContext)
    const { count }= useContext(CountContext) 
    
    return (
        <div>
            <h1 style={{ color : color }}>컬러 : { color }, { count }</h1>
            <p>
                <button onClick={ () => onRed() }>빨강</button>
                <button onClick={ () => onGreen() }>초록</button>
                <button onClick={ () => onBlue() }>파랑</button>
                <button onClick={ () => onMagenta() }>보라</button>
            </p>
        </div>
    );
};

export default Color;