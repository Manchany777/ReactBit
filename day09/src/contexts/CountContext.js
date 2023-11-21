import React, { createContext, useState } from 'react';

export const CountContext = createContext();

const CountProvider = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        // Provider에는 value가 있으며, 이것이 데이터로 하위에 있는 컴포넌트에게 전달된다.
        <CountContext.Provider value={{ count, increment, decrement }}>
            {/* children은 부모 컴포넌트에게 자식 컴포넌트를 포함할 때 자동으로 전달된다. */}
            { props.children }
        </CountContext.Provider>
    );
};

export default CountProvider;