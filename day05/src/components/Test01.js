import { useState, useEffect } from 'react';
import axios from 'axios'

const Test01 = () => {
    const [data, setData] = useState([])

    //1번
    /*
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts') 
        .then(res => res.json()) 
        .then(res => setData(res))
        // response응답이 오면 json형식으로 받아서 data에 보관하겠다
    }, [])*/

    //2번
    /*
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setData(res.data)) 
        // axios를 사용하면 객체로 바로 받아오기에 axios를 거칠 필요없이 바로 데이터를 set 할 수 있다.
    }, [])*/

    //3번
    /*
    useEffect(() => {
        const getData = async() => {
            // async, await : 명령어(지정어)...async를 사용하면 꼭 써야함 
            // (비동기로 처리시 데이터 불러오는 걸 지연시킬 필요가 있는데 이럴때 유용)
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setData(data)
        } // ① async(비동기)로 화살표 함수로 데이터를 받아오고,
        getData() // ② 위에 const 변수에 async로 받아온걸 호출함
    }, [])*/

    //4번
    useEffect(() => {
        const getData = async() => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(res.data)
        }

        getData()
    }, [])


    //useEffect(() => {}, [])

    return (
        <div>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.title}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test01;

/*
비동기 통신 - ajax
서버에 새로고침 없이 요청할 수 있게 도와준다.
서버로 네트워크 요청을 보내고 응답을 받을 수 있도록 도와준다.

1. jQuery - $.ajax()
2. js - fetch()
        fetch() -> json 형식으로 가져온다.
3. 설치 - axios
          axios.get() -> object 형식으로 가져온다. 

- 외부 API 비동기 통신을 위해서 fetch()를 이용한다.
- fetch()에 API 경로를 적어주면 promise가 반환된다.
fetch( url, [options] )

fetch(url)
.then(콜백) - 응답 성공
.catch(콜백) - 응답 실패

axios.get(url)
     .then(콜백) - 응답 성공
     .catch(콜백) - 응답 실패

npm install axios / yarn add axios
*/