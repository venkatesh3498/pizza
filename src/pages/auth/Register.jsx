import './auth.css';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="auth-home">
            <div className="lore-link">
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Register
