import '../../App.css';
import './login.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router";
import {auth} from "../../firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export default function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });

    const [loginEmail, setLoginEmail ] = useState("")
    //const [username, setUsernameReg] = useState();
    const [loginPassword, setLoginPassword] = useState("");
    
    async function onSubmit(e) {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async() => {
        await signOut(auth);
    }

    return <div className='login'>
        <h1>Login</h1>
        <label>Email</label>
        <input 
            type="text" 
            placeholder="Email"
            onChange={(e) => {
                setLoginEmail(e.target.value);
            }}
        />
        <label>Password</label>
        <input 
            type="password" 
            placeholder="password"
            onChange={(e) => {
                setLoginPassword(e.target.value);
            }}
        />
        <button onClick={onSubmit}>Login</button>

        <button2 onClick={logout}> Sign Out</button2>

        <h2> User Logged In: </h2>
        <text>{user?.email}</text>
        <text>{user?.uid}</text>
    </div>
}