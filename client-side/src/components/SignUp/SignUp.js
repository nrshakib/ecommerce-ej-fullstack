import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handlConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Password didn't match");
            return;
        }
        if(password.length < 6){
            setError('Password must be of 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    if(user){
        navigate('/shop');
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handlConfirmPasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='signup-text'>
                    Already Have an Account? <Link className='form-link' to="/login">Log In</Link>
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

export default SignUp;