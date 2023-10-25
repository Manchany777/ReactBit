import React, { useState } from 'react';
import dataList from './Test08Data';

import '../css/Test08.css'
import Test08View from './Test08View';

const Test08Gallery = () => {
    const [data, setData] = useState(dataList)
    const [one, setOne] = useState(data[0])

    const onView = (id) => {
        setOne(data[id-1])
    }

    return (
        <div className='wrap2'>
            <Test08View data={data} onView={ onView } one={ one } />
        </div>
    );
};

export default Test08Gallery;