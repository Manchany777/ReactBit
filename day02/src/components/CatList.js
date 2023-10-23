import React from 'react';
import CatItem from './CatItem';

const CatList = ({data}) => {
//const CatList = (props) => { // -> data대신에 props라고 적어도 된다. (이전시간에 했던 내용)
    return (
        <div>
            <ul className='list2'>
                {
                    data.map(item => <CatItem item={ item }/>)
                }
            </ul>
        </div>
    );
};

export default CatList;