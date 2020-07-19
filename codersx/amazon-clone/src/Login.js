import React, { useState } from 'react'
import './Login.css'
import { Link, Redirect } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false)

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {

            setIsLogin(true)
        })
        .catch(err=>alert(err.message))
    }

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            
            setIsLogin(true)
        })
        .catch(err => alert(err.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt='logo'
                />
            </Link>
           
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email'/>
                    <h5>Password</h5>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password'/>
                    <button 
                        onClick={login}
                        type='submit' 
                        className='login__signInButton'
                    >
                        Sign in
                    </button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button 
                    onClick={register}
                    className='login__registerButton'
                >
                    Create your Amazon Account
                </button>
            </div>
            {
                isLogin && <Redirect to='/'/>
            }
        </div>
    )
}

export default Login
