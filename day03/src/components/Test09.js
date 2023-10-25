import React from 'react';

import img01 from '../img/cat01.jpg'
import img02 from '../img/cat02.png'
import img03 from '../img/cat03.jpg'
import img04 from '../img/cat04.jpg'

const Test09 = () => {
    return (
        <div>
            <img src={ img01 } alt='고양이1' style={{width: '300px', height: '300px'}}/>
            <img src={ img02 } alt='고양이2' style={{width: '300px', height: '300px'}}/>
            <img src={ img03 } alt='고양이3' style={{width: '300px', height: '300px'}}/>
            <img src={ img04 } alt='고양이4' style={{width: '300px', height: '300px'}}/>
        </div>
    );
};

export default Test09;

/*
src 안에 있는 이미지 파일 처리는 참조변수를 사용한다.
[형식]
  import 참조변수 from '이미지경로';
*/