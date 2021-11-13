import './auth.css';
import { Link } from 'react-router-dom';
import RandomPic from './RandomPic';
import React,{useState} from 'react';

function Register() {
    const [showPass,setShowPass] = useState(false)
    return (
        <div className="auth-home">
            <div className="slider-container">
                <RandomPic />
            </div>
            <div className="auth-card">
                <div className="auth-desc">
                    <h2>Welcome To Eatland</h2>
                    <p>Create a free account now and enjoy<br /> our endless services</p>
                </div>
                
                <div className="form">
                    <div className="uname">
                        <img src="https://img.icons8.com/material-rounded/24/000000/user.png"/>
                        <input className="inp" type="text"  required placeholder="Name.." />
                    </div>
                    <div className="email">
                        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/20/000000/external-email-interface-kiranshastry-solid-kiranshastry-1.png"/>
                        <input className="inp" type="email"  required placeholder="Email.." />
                    </div>
                    <div className="password">
                        <img src="https://img.icons8.com/metro/20/000000/lock-2.png"/>
                        <input className="inp pass" type={showPass ? "text" : "password"} required placeholder="Password.." />
                        {showPass ? <img onClick={()=>{setShowPass(false)}} src="https://img.icons8.com/material-sharp/20/000000/hide.png"/> :<img onClick={()=>{setShowPass(true)}} src="https://img.icons8.com/material-rounded/20/000000/visible.png"/>}
                    </div>
                    <input type="submit" className="form-but" value="SignUp" />
                </div>
                <div className="lore-link">
                    Have an account?  
                    <Link to="/login">  Login  </Link>
                </div>
            </div> 
        </div>
    )
}

export default Register
