import React from 'react';

const Name = ({name, onInputName}) => {
    return (
        <div>
            이름 입력 : <input type='text' value={ name }  onChange={ onInputName } />
        </div>
    );
};

export default Name;