import React from 'react';

const Output = (props) => {
    const {name, fruit} = props

    return (
        <div>
            <h1><b style={{color: 'blue'}}>{name}</b>님이 좋아하는 과일은 <b style={{color: 'red'}}>{fruit}</b>입니다.</h1>
        </div>
    );
};

export default Output;