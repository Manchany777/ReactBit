import React from 'react';
import Test08Item from './Test08Item';

const Test08List = ({ data, onView }) => {
    return (
        <ul className='list'>
            {
                data.map(item => <Test08Item key={ item.id } item={ item } onView={ onView } />)
            }
        </ul>
    );
};

export default Test08List;