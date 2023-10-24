import React from 'react';

const Fruit = ({fruit, onInputFruit}) => {
    return (
        <div>
            과일명 입력 : <input type='text' value={ fruit }  onChange={ onInputFruit } />
        </div>
    );
};

export default Fruit;