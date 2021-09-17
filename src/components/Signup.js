import React,{useState,} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {signupURL} from '../utils/constant'
import axios from 'axios'

function Signup({setIsLoggedIn}){
    const [email, setEmail]=useState('')
    const [username, setUserName]=useState('')
    const [password, setPassword]=useState('')
    const [errors, setErrors]=useState({username:'', email:'', password:''})
    const history = useHistory()

    let handleChange = (event)=>{
        let {name, value} = event.target
        name==='email'?setEmail(value)
        :name==='password'?setPassword(value):setUserName(value)
        let error= {...errors}
        switch(name){
            case 'email':
                setErrors({
                    email:value.indexOf('@') === -1?'Email does not contain @':''
                })
                break;
            case 'password':
                let re=/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
                setErrors({
                    password:!re.test(value)?'Must contain both Number and Alphabet'
                    :value.length<7?"Password can't be less than 6 characters":''
                })
                break;
            default:
                return error
        }
        
    }

    let handleSubmit = (event)=>{
        event.preventDefault()
        axios.post(signupURL, {
            "user":{"username":username,
            "email":email,
            "password":password}
        })
        .then((res)=>{
            console.log(res.data)
        })
        .then((user)=>{console.log(user)
            setIsLoggedIn(true) 
            history.push('/')
            setUserName('')
            setEmail('')
            setPassword('')
        })
        .catch((err)=>{
            setErrors({email:err.response.data.errors.email,
        username:err.response.data.errors.username})
    })
        
    }

    return(
        <div className='form-div'>
            <form onSubmit={handleSubmit} className='form form-login'>
                <div className='text-center'>
                    <legend className='form-legend'>Sign Up</legend>
                    <Link to='/login' className='form-switch'>
                        Have an account?
                    </Link>
                </div>
                <fieldset className='form-group'>
                    <input
                        className='form-control'
                        name='username'
                        type='text'
                        placeholder='Username'
                        onChange={handleChange}
                        value={username}
                    />
                    <span className='error'>{errors.username}</span>
                    <input
                        className='form-control'
                        name='email'
                        type='email'
                        placeholder='Email'
                        onChange={handleChange}
                        value={email}
                    />
                    <span className='error'>{errors.email}</span>
                    <input
                        name='password'
                        className='form-control'
                        type='password'
                        value={password}
                        onChange={handleChange}
                        placeholder='Password'
                    />    
                    <span className='error'>{errors.password}</span>
                    <div className='text-right'>
                        <input
                            className='btn sign-in-btn'
                            disabled={errors.email || errors.password || errors.username}
                            type='submit'
                            value='Sign up'
                        />
                    </div>
                </fieldset>
            </form>
            
        </div>
    )
}

export default Signup
