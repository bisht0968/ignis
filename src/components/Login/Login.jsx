import React, { useEffect, useState } from 'react'
import "./Login.scss"
import LoginPic from "../../assets/login.jpeg"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Login({ setShowHeader, setIsLoggedIn, setUsername }) {

    useEffect(() => {
        setShowHeader(false)
    })

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.xsrfHeaderName = 'X-CSRFToken';

        const data = {
            email: email,
            password: password,
        }
        await axios.post('http://127.0.0.1:8000/api/authenticate/', data)
            .then((response) => {
                console.log(response.data);
                console.log(response.data.message);
                if (response.data.message === 'User is authenticated') {
                    navigate('/');
                    setShowHeader(true)
                    setIsLoggedIn(true)
                    setUsername(response.data.user_data.email)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    setError('Authentication failed. Please check your credentials.');
                } else if (error.response && error.response.data && error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError('An error occurred during authentication. Please try again later.');
                }
            });
    };


    return (
        <div className='loginSection'>
            <div className="loginContent">
                <div className="loginForm">
                    <div className="logo" onClick={() => {
                        setShowHeader(true)
                        navigate('/')
                    }}>LOGO</div>
                    <div className="loginTitle">Log in</div>
                    <form onSubmit={handleLogin} >
                        <label >
                            <input type="email" placeholder='Email address' value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label >
                            <input type="password" placeholder='Password' value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        {error && <div className="error">{error}</div>}
                        <div className="loginButton" >
                            <button type='submit'>
                                Log in
                            </button>
                        </div>
                    </form>
                    <div className="signUpButton" onClick={() => navigate('/signup')}>Sign up</div>
                </div>
                <div className="loginBanner">
                    <img src={LoginPic} alt="" />
                </div>
            </div>
        </div>
    )
}
