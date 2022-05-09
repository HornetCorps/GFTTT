import '../../App.css';
import './login.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router";
import {auth , signInWithGitHub, signInWithGoogle} from "../../firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export default function Login({user}) {
    const navigate = useNavigate();

    const [userAuth, setUserAuth] = user;

    onAuthStateChanged(auth, (currentUser) => {
        setUserAuth(currentUser);
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

        <button3 onClick={signInWithGoogle}>Sign In With Google</button3> 

        <button4 onClick={signInWithGitHub}>Sign In With Github</button4>

        <button2 onClick={logout}> Sign Out</button2>

        <h2> User Logged In: </h2>
        <text>{userAuth?.email}</text>
        <text>{userAuth?.uid}</text>
    </div>
}
