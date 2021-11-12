import { Link } from 'react-router-dom';
import './auth.css';

function Login() {
    return (
        <div className="auth-home">
            <div className="lore-link">
                <Link to="/register">Register</Link>
            </div> 
        </div>
    )
}

export default Login;
