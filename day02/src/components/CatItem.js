import React from 'react';

const CatItem = ({item}) => { // CatData의 1개분량의 데이터
    const { id, img, title } = item
    return (
        <div>
            <li>
                <a href='#'>
                    <div>
                        <img src={img} alt='' />
                        <h3>{ title }</h3>
                    </div>
                </a>
            </li>
        </div>
    );
};

export default CatItem;