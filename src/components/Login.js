import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import {loginURL} from '../utils/constant'


function Login({setIsLoggedIn, setUser}){
    const [email, setEmail]=useState('joel.rajesh13@gmail.com')
    const [password, setPassword]=useState('123456a')
    const [errors, setErrors]=useState({email:'', password:''})
    let history = useHistory();

    let handleChange = (event)=>{
        let {name, value} = event.target
        name==='email'?setEmail(value):setPassword(value)
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
                return errors
        }
        
    }

    let handleSubmit = (event)=>{
        event.preventDefault()
        axios.post(loginURL, {
            "user":{
            "email":email,
            "password":password}
        })
        .then((res)=>{
            console.log(res.data)
        })
        .then((user)=>{
            setIsLoggedIn(true) 
            history.push('/')
            setEmail('')
            setPassword('')
            
            
        })
        .catch((err)=>{
            console.dir(err.response)
            setErrors({email:err.response===undefined?'':err.response.data.errors.email,
        })
    })
        
    }

    return(
        <div className='form-div'>
            <form onSubmit={handleSubmit} className='form form-login'>
                <div className='text-center'>
                    <legend className='form-legend'>Sign In</legend>
                    <Link to='/signup' className='form-switch'>
                        Need an account?
                    </Link>
                </div>
                <fieldset className='form-group'>
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
                            disabled={errors.email || errors.password}
                            type='submit'
                            value='Sign in'
                        />
                    </div>
                </fieldset>
            </form>
            
        </div>
    )
}

export default Login
