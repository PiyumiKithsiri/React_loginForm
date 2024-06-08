import { useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/signup', {fname, lname, email, password, cpassword})
        .then(result => 
            {console.log(result)
            navigate('/login')
        })
        .catch(err => 
            console.log(err)
        )
    }

    return (
        <div className="signup template d-flex justify-content-center align-item-center vh-100 bg-primary">
            <div className="form_container p-5 rounded bg-white minimized-height">
            <form onSubmit={handleSubmit}>
                <h3 className="text-center">Sign Up</h3>
                <div className="mb-2">
                    <label htmlFor="fname">
                        First Name
                    </label>
                    <input 
                        type="text" 
                        className="form-control rounded-0" 
                        placeholder="Enter First Name"
                        name="fname"
                        autoComplete='off'
                        onChange={(e) => 
                            setFname(e.target.value)
                        } 
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="lname">
                        Last Name
                    </label>
                    <input 
                        type="text" 
                        className="form-control rounded-0" 
                        placeholder="Enter Last Name"
                        name="lname"
                        autoComplete='off'
                        onChange={(e) => 
                            setLname(e.target.value)
                        } 
                    />
                </div>
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
                        name='password'
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="cpassword">
                        Confirm Password
                    </label>
                    <input 
                        type="password" 
                        className="form-control rounded-0" 
                        placeholder="Confirm password" 
                        name='cpassword'
                        onChange={(e) =>
                            setCpassword(e.target.value)
                        }
                    />
                </div>
                <div className="b-grid mt-2">
                    <button className="btn btn-primary btn-lg" >Sign Un</button>
                </div>
                <p className="text-end mt-2">
                    Already Registerd <Link to="/Login" className="ms-2">Sign In</Link>
                </p>
            </form>
            
        
            </div>
        </div>
    );
}

export default Signup;