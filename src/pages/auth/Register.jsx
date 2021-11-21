import './auth.css';
import { Link } from 'react-router-dom';
import RandomPic from './RandomPic';
import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { registerUser } from '../../actions/userActions';
function Register() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch  = useDispatch();
    const [showPass,setShowPass] = useState(false)
    const logstatus = useSelector(state=>state.userRegisterReducer.response);
    if(logstatus==200){
        window.open('/login')
    }
    function registeruser(){
        const user = {
            username,
            email,password
        }
        if(username.length>=1){
            if(email.length>=8&&email.includes('@')&&email.toLowerCase().includes('.com')){
                if(password.length>=8){
                    console.log(JSON.stringify(user))
                    dispatch(registerUser(user));
                }else{
                    alert("password must have 8 characters");
                }
            }else{
                alert("enter valid email address");
            }
            
        }else{
            alert("enter Username length Of 1character");
        }
        
    }

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
                        <input className="inp" type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} required={true} placeholder="Name.." />
                    </div>
                    <div className="email">
                        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/20/000000/external-email-interface-kiranshastry-solid-kiranshastry-1.png"/>
                        <input className="inp" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  required={true} placeholder="Email.." />
                    </div>
                    <div className="password">
                        <img src="https://img.icons8.com/metro/20/000000/lock-2.png"/>
                        <input className="inp pass" type={showPass ? "text" : "password"} value={password} onChange={(e)=>{setPassword(e.target.value)}} required={true} placeholder="Password.." />
                        {showPass ? <img onClick={()=>{setShowPass(false)}} src="https://img.icons8.com/material-sharp/20/000000/hide.png"/> :<img onClick={()=>{setShowPass(true)}} src="https://img.icons8.com/material-rounded/20/000000/visible.png"/>}
                    </div>
                    <button onClick={registeruser} className="form-but" >Signup</button>
                    
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
