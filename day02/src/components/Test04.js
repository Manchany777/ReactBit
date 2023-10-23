import React, { useState } from 'react';

const Test04 = () => {
    const[visible, setVisible] = useState(true)
    //const[ontoggle, setOntoggle] = useState(true)

    const onShow = (visible) => {
        setVisible(true)
    }
    const onHide = (visible) => {
        setVisible(false)
    }
    
    // const ontoggle = visible === true ? onHide : onShow // 내가 한거
    const ontoggle =() => { // 쌤이 한 거
        setVisible( !visible )
    }
    
    return (
        <div>
            <button onClick={ () => onShow(visible) }>보이기</button>
            <button onClick={ () => onHide(visible) }>숨기기</button>
            <button onClick={ ontoggle }> { visible === false ? '보이기(색이 안보일 때)' : '숨기기(색깔이 보이면)' }</button>
            <hr/>
            {
                
                visible && <div style={{width: 300, height: 300, background: 'hotpink'}}></div>
                // 쌤은 아래보다 위에걸 더 추천
                // visible ? <div style={{width: 300, height: 300, background: 'hotpink'}}></div> : null
            }
        </div>
    );
};

export default Test04;