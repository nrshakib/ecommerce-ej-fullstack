import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './LogIn.css';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location = useLocation();

      const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleUserLogIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate(from, {replace: true});
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Log In</h2>
                <form onSubmit={handleUserLogIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Log In" />
                </form>
                <p className='signup-text'>
                    New to Ema John? <Link className='form-link' to="/signup">Create An Account</Link>
                </p>
                <div className='or-line'>
                    <p><span>or</span></p>
                </div>
                <div>
                    <button type="button" className="google-btn" >
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;