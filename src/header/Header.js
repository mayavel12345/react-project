import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div>
             <div className='headernavigations'>
                <Link to={'/'}>HOME</Link>
                <Link to={'/menu'}>MENU</Link>
                <Link>LOGIN</Link>
                <Link>SIGN UP</Link>
            </div>
            <h1>TASTY ICECREAMS</h1>
            <div>
                <img className='headerimage' src={require('../header/flavors-of-ice-cream-1400x400.jpg')} />
            </div>
           
        </div>
    )
}

export default Header;