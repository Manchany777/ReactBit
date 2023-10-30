import React, { useState } from 'react';
import Test04Sub from './Test04Sub';

const Test04 = () => {
    const [color, setColor] = useState('')
    const [food, setFood] = useState('')

    const onFood = (e) => {
        setFood(e.target.value)
    }
    const onColor = (e) => {
        setColor(e.target.value)
    }

    return (
        <div style={{ margin: 30 }}>
            <h2>당신이 좋아하는 색은?</h2>
            <div>
                <select onChange={ onColor } size='5' style={{ width: '120px' }}>
                    <option value='hotpink'>hotpink</option>
                    <option value='magenta'>magenta</option>
                    <option value='skyblue'>skyblue</option>
                    <option value='tomato'>tomato</option>
                </select>
                {/* <input type='text' value={ color } onChange={ e => setColor(e.target.value) } />
                <p>선택 : hotpink, magenta, skyblue, tomato </p> */}
                {/* input 대신 select방식으로 함 (input방식으로 하면 onColor 구현부 필요없음) */}
            </div>
            <hr/>
            <h2>당신이 좋아하는 음식은?</h2>
            <div>
                <p>
                    <input type='radio' name='food' value='햄버거' onChange={ onFood }/>
                    <label> 햄버거 </label>
                </p>
                <p>
                    <input type='radio' name='food' value='삼겹살' onChange={ onFood }/>
                    <label> 삼겹살 </label>
                </p>
                <p>
                    <input type='radio' name='food' value='치킨' onChange={ onFood }/>
                    <label> 치킨 </label>
                </p>
                <p>
                    <input type='radio' name='food' value='짜장면' onChange={ onFood }/>
                    <label> 짜장면 </label>
                </p>
            </div>
            <hr/>
            <Test04Sub color={ color } food={ food } />
        </div>
    );
};

export default Test04;