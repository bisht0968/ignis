import "./SignUp.scss"
import LoginPic from "../../assets/login.jpeg"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

export default function SignUp({ setShowHeader }) {

    useEffect(() => {
        setShowHeader(false)
    }, [])

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/users/", {
                email,
                password
            });
            console.log(response.data);
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='signUpSection'>
            <div className="SignUpContent">
                <div className="signUpForm">
                    <div className="logo" onClick={() => {
                        setShowHeader(true)
                        navigate('/')
                    }}>LOGO</div>
                    <div className="signUpTitle">Create an account</div>
                    <form onSubmit={handleSubmit}>
                        <label >
                            <input type="email" placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label >
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <div className="signUpButton" >
                            <button type='submit'>
                                Continue
                            </button>
                        </div>
                    </form>
                    <div className="loginButton" onClick={() => navigate('/login')}>Log in</div>
                </div>
                <div className="signUpBanner">
                    <img src={LoginPic} alt="" />
                </div>
            </div>
        </div>
    )
}

