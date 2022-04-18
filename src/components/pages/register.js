import '../../App.css';
import './register.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router";
import {auth} from "../../firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export default function Register() {
    const navigate = useNavigate();
    
    const [email, setEmailReg] = useState("");
    const [username, setUsernameReg] = useState("");
    const [password, setPasswordReg] = useState("");

    
    async function signUp(e) {
        try {
            const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return <div className='register'>
    <h1>Registration</h1>
        <label>E-mail</label>
        <input 
            type="text" 
            placeholder="Email"
            onChange={(e) => {
                setEmailReg(e.target.value);
            }}
        />
        <label>Password</label>
        <input 
            type="password" 
            placeholder="Password"
            onChange={(e) => {
                setPasswordReg(e.target.value);
            }}
        />
        <button onClick={signUp}>Register</button>
    </div>
}