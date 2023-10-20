import React from 'react';

// const Person = (props) => {
//     const {name, age} = props
//     return (
//         <div>
//             <h1>나의 이름은 {name}이고, 나이는 {age}살 입니다.</h1>
//         </div>
//     );
// };

// 비구조할당시 한 번 더 거치기 번거로우면 이런식으로, props 인자값으로 바로 넘겨도된다. 
// 단, 이 경우 반드시 {객체}로 감싸야 한다. 주의
const Person = ({ name, age }) => {
    return (
        <div>
            <h1>나의 이름은 {name}이고, 나이는 {age}살 입니다.</h1>
        </div>
    );
};

export default Person;