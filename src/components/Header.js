import React, {useState} from 'react'
import { Route,NavLink,Link } from 'react-router-dom'

function Header({isLoggedIn, user}){
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
                    {
                        isLoggedIn?<AuthHeader user={user}/>:<NonAuthHeader/>
                    }
                </nav>
            </div>
        </header>
    )
}

function NonAuthHeader(){
    return(
        <ul className='flex'>
                        <li>
                            <NavLink className='header-links' activeClassName='header-active' to='/signup'>
                                Sign Up
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='header-links' activeClassName='header-active' to='/login'>
                                Login
                            </NavLink>
                        </li>
                        
                    </ul>
    )
}

function AuthHeader({user}){
    return(
        <ul className='flex'>
                        <li>
                            <NavLink className='header-links' activeClassName='header-active' to='/signup'>
                                New Article
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='header-links' activeClassName='header-active' to='/login'>
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='header-links' activeClassName='header-active' to='/login'>
                               Profile
                            </NavLink>
                        </li>
                    </ul>
    )
}

export default Header

