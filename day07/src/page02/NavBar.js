import React, { useState } from 'react';
import data from './navData';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isNav, setIsNav] = useState(false)

    const onToggle = () => {
        setIsNav(!isNav)
    }

    return (
        <div className='navbar'>
            <p className='all-menu' onClick={ onToggle }>menu</p>
            <nav className={ isNav ? 'on' : ''}>
                <ul>
                    {/* <li><Linknk to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/ceo'>Ceo</Link></li>
                    <li><Link to='/sub01'>Sub01</Link></li> 
                    아래처럼 외부에서 export 데이터를 map으로 돌리면, 위처럼 쓸 필요가 없어진다.
                    */}
                    

                    {
                        data.map((item, index) => <li key={ index }>
                            <Link to={ item.path }>{ item.title }</Link>
                        </li>)
                    }
                </ul>
                <p className='close' onClick={ () => setIsNav(false) }>X</p>
            </nav>
        </div>
    );
};

export default NavBar;