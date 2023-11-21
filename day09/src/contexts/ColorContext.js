import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

//const ColorProvider = (props) => {
const ColorProvider = ({children }) => {
    const [color, setColor] = useState('orange')

    const onRed = () => { setColor('red') }
    const onGreen = () => { setColor('green') }
    const onBlue = () => { setColor('blue') }
    const onMagenta = () => { setColor('magenta') }
 
    return (
        <ColorContext.Provider value={{ color, onRed, onGreen, onBlue, onMagenta }}>
            {/* { props.children } */}
            { children }
        </ColorContext.Provider>
    );
};

export default ColorProvider;