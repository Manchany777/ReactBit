import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {  // 객체로 넘어왔으니 객체로 묶어줘야 함
    data: {}, 
    error: null, 
    loading: true 
}

const reducer = (state, action) => { // 상태 변수를 외부에서 관리 (여기서의 state는 const의 state와 변수명을 맞춰야 됨)
    switch(action.type) {
        case 'SUCCESS': 
            return {  // 객체로 넘겨줌
                data: action.payload,
                error: null,
                loading: false
            }
        case 'ERROR': 
            return {  // 객체로 넘겨줌
                data: {},
                error: '에러~~',
                loading: true
            }
        default: return state
    }
}

const Test04 = () => {
    const [state, dispatch] = useReducer(reducer, initialState) // 총 4개의 데이터가 있기때문에 state객체변수로 잡음
    // [state, dispatch] 둘 다 단순한 변수명임 -> 매개변수명만 맞추면 된다.

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts/3'

        axios.get(url)
            .then(response => { dispatch({ type: 'SUCCESS', payload: response.data }) }) //  성공시 (payload 변수속에 모든 데이터를 실어보냄)
                // res대신 response 써도 상관없다. 그냥 약어 쓴 거임 (대신 dispatch안의 payload에도 response라 적어야 함 )
            .catch(error => { dispatch({ type: 'ERROR' })}) // 실패시
    }, [])

    return (
        <div>
            <h2>
                {
                    state.data && state.loading ? '로딩 중' : state.data.title
                }
            </h2>
            <p>
                {
                    state.error ? state.error : null
                }
            </p>
        </div>
    );
};

export default Test04;