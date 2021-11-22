import React,{useState,useEffect} from 'react';
import {Navigate} from 'react-router'
import { Link } from 'react-router-dom';
import './auth.css';
import RandomPic from './RandomPic';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/userActions';
function Login() {
    const loginSuccess = useSelector(state=>state.userLoginReducer.success);
    const [showPass,setShowPass] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    
    function Userlogin(){
        const user= {
            email,password
        }
        dispatch(loginUser(user)); 
    }
    return (
        <>
        {!loginSuccess ?(
                <div className="auth-home">
                <div className="slider-container">
                    <RandomPic />
                </div>
                <div className="auth-card">
                    <div className="auth-desc">
                        <h2>Login To Eatland</h2>
                        <p>Welcome back! login with your credintials that<br /> you entered during registration</p>
                    </div>
                    
                    <div className="form">
                        <div className="email">
                            <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/20/000000/external-email-interface-kiranshastry-solid-kiranshastry-1.png"/>
                            <input className="inp" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  required placeholder="Email" />
                        </div>
                        <div className="password">
                            <img src="https://img.icons8.com/metro/20/000000/lock-2.png"/>
                            <input className="inp pass" type={showPass ? "text" : "password"} value={password} onChange={(e)=>{setPassword(e.target.value)}} required placeholder="Password.." />
                            {showPass ? <img onClick={()=>{setShowPass(false)}} src="https://img.icons8.com/material-sharp/20/000000/hide.png"/> :<img onClick={()=>{setShowPass(true)}} src="https://img.icons8.com/material-rounded/20/000000/visible.png"/>}
                        </div>
                        <button onClick={Userlogin} className="form-but" >Login</button>
                    </div>
                    <div className="lore-link">
                        Dont have an account?  
                        <Link to="/register">  Register  </Link>
                    </div>
            </div> 
        </div>
        )
    : <Navigate to="/" />
    }
       </> 
    )
}

export default Login;
