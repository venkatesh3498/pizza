
import { Link } from 'react-router-dom';
import './auth.css';
import RandomPic from './RandomPic';
function Login() {
    return (
        <div className="auth-home">
            <div className="slider-container">
                <RandomPic />
            </div>
            <div className="auth-card">
                <div className="form">
                    <input type="email" required placeholder="Enter Your Email" />
                    <input type="password" required placeholder="Enter Password.." />
                    <input type="submit" value="Login" />

                </div>
                <div className="lore-link">
                    <Link to="/register">Register</Link>
                </div>
            </div> 
        </div>
    )
}

export default Login;
