import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => 
            {console.log(result)
            if (result.data === 'Success') {
                navigate('/home')
            }
            
        })
        .catch(err => 
            console.log(err))
    }

    return (
        <div className="login template d-flex justify-content-center align-item-center vh-100 bg-primary">
            <div className="form_container p-5 rounded bg-white minimized-height1">
            <form onSubmit={handleSubmit}>
                <h3 className="text-center">Sign In</h3>
                <div className="mb-2">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="email" 
                        className="form-control rounded-0" 
                        placeholder="Enter email"
                        name="email"
                        autoComplete='off'
                        onChange={(e) => 
                            setEmail(e.target.value)
                        } 
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input 
                        type="password" 
                        className="form-control rounded-0" 
                        placeholder="Enter password"
                        name="password"
                        onChange={(e) =>
                            setPassword(e.target.value)
                        } 
                    />
                </div>
                <div className="mb-2">
                    <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                    <label htmlFor="check" className="custom-input-label ms-2">
                        Remember Me
                    </label>
                </div>
                <div className="b-grid">
                    <button className="btn btn-primary btn-lg" >Sign in</button>
                </div>
                <p className="text-end mt-2">
                    Forgot <a href=''>Password?</a><Link to="/" className="ms-2">Sign Up</Link>
                </p>
            </form>
            
        
            </div>
        </div>
    );
}

export default Login;