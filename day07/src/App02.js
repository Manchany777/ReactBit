import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page02/Home';
import NavBar from './page02/NavBar';
import About from './page02/About';
import Ceo from './page02/Ceo';
import Sub01 from './page02/Sub01';
import NotFiles from './page02/NotFiles';

//import './css/style02.css' // => page05의 내용과 겹쳐서 잠시 주석 처리됨
//import styles from './css/page02.module.css'; (보류)

const App02 = () => {
    return (
        <BrowserRouter>
            <>
                <NavBar />

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={ <Home /> }></Route>
                    <Route path='/about' element={ <About /> }></Route>
                    <Route path='/ceo' element={ <Ceo /> }></Route>
                    <Route path='/sub01' element={ <Sub01 /> }></Route>
                    <Route path='*' element={ <NotFiles />  }>내가 요구한 게 아닌 엉뚱한 파일이 들어오면 이쪽으로 보내라 한마디로 에러 파일</Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App02;