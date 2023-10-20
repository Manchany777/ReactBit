import React from 'react';

const Lion = (props) => {
    const {name} = props;
    return (
        <div>
            <h1>나는 { name } 컴포넌트이다.</h1>
        </div>
    );
};

export default Lion;