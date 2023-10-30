import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './page05/Main';

import './css/style05.css'

const App05 = () => {
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul><Link to='/'>Home</Link></ul>
                </nav>

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={ <Main /> } />
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App05;