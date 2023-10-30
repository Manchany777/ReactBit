import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

const initialState =  {
    data: {},
    error: null,
    loading: true
}

const reducer = (states, action) => {
    switch(action.type) {
        case 'SUCCESS': 
            return {
                data: action.payload,
                error: null,
                loading: false
            }
        case 'ERROR':
            return {
                data: {},
                error: '에러 발생~~',
                loading: true
            }
            default : return states
    }
}

const Test05 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const[id, setId] = useState(1)
    const [search, setSearch] = useState(1)

    // const onInputId = (e) => {
    //     const { value } = e.target.value
    //     setId(value)
    // }

    const onSearch = (id) => {
        setSearch(id)
    }
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`

        axios.get(url)
            .then(response => {
                dispatch({ type: 'SUCCESS', payload: response.data })
                console.log(response.data)
            })
            .catch(error => {
                dispatch({ type: 'ERROR' })
            })
    }, [search])

    return (
        <div>
            <h3>
                ID 입력 (1 ~ 5000) : <input type='text' value={ id } onChange={ (e) => setId(e.target.value) }/>
                <button onClick={ () => onSearch(id) }>검색</button>
            </h3>
            <h2>
                {
                    state.loading || <img src={ state.data.thumbnailUrl } />
                }
                {
                    state.data && state.loading ? '로딩 중~~' : state.data.title
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

export default Test05;