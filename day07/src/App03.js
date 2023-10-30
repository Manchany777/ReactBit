import React from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Home from './page03/Home';
import About from './page03/About';
import Profile from './page03/Profile';
import Front from './page03/Front';

const data = [
    { title: 'html', info: 'HTML 입니다.' }, 
    { title: 'css', info: 'CSS 입니다.' }, 
    { title: 'javascript', info: 'JAVASCRIPT 입니다.' }, 
    { title: 'react', info: 'REACT 입니다.' }, 
    { title: 'vue', info: 'VUE 입니다.' }, 
]

const App03 = () => {
    return (
        <BrowserRouter>
            <>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>

                    <li><Link to='/front/html'>HTML</Link></li>
                    <li><Link to='/front/css'>CSS</Link></li>
                    <li><Link to='/front/javascript'>JAVASCRIPT</Link></li>
                    <li><Link to='/front/react'>REACT</Link></li>
                    <li><Link to='/front/vue'>VUE</Link></li>
                </ul>
            </>

            {/* 화면에 보이는 영역 */}
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/profile' element={ <Profile />} />
                <Route path='/front/:name' element={ <Front data={ data } />} />
            </Routes>
            
        </BrowserRouter>
    );
};

export default App03;

/*
 :style 를 route path에 사용하면 useParams() 로 불러와 사용할 수 있다.
 : 뒤에 나오는 부분이 params의 key 부분이 되어 :name 는 name가 key가 되어 불러오고 있다.
*/