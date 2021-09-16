import React,{useState,} from 'react'
import {Link} from 'react-router-dom'

function Signup(){
    const [email, setEmail]=useState('')
    const [username, setUserName]=useState('')
    const [password, setPassword]=useState('')
    const [errors, setErrors]=useState({username:'', email:'', password:''})

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
                        name='username'
                        type='text'
                        placeholder='Username'
                        onChange={handleChange}
                        value={username}
                    />
                    <span className='error'>{errors.email}</span>
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
                            type='submit'
                            value='Sign in'
                        />
                    </div>
                </fieldset>
            </form>
            
        </div>
    )
}

export default Signup
