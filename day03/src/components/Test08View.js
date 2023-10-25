import React from 'react';
import Test08List from './Test08List';
import Test08Big from './Test08Big';

const Test08View = ({ data, onView, one }) => {
    return (
        <div>
            <div className='bigview'>
                <Test08Big one={ one } />
                <Test08List data={data} onView={ onView } />
            </div>
        </div>
    );
};

export default Test08View;