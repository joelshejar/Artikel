import React, {useState} from 'react'
import { Route,NavLink,Link } from 'react-router-dom'

function Header(){
    return(
        <header className='navbar'>
            <div className='container flex'>
                <Link className='logo' to='/'>
                    <img src='/images/logo_size.jpg' alt='Brand Logo'/>
                </Link>
                <label class="bars" for="toggle">
                    <i class="fas fa-bars"></i>
                </label>
                <input id="toggle" type="checkbox"></input>
                <nav>
                    <ul className='flex'>
                        <li>
                            <NavLink className='header-links' activeClassName='header-active' to='/signup'>
                                Signup
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='header-links' activeClassName='header-active' to='/login'>
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

