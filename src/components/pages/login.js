import '../../App.css';
import './login.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsernameReg] = useState();
    const [password, setPasswordReg] = useState();
    
    async function onSubmit(e) {
        let userLogin = {username,password};
        e.preventDefault();
        
        if(username == null || password == null){
            window.alert("All fields required.");
            return;
        }
        
        await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userLogin),
        })
        .then(res => {
            if(res.status === 404){
                window.alert("Invalid user or password");
                navigate("/login");
            }
            if(res.status === 200){
                window.alert('Successful login, Welcome ' + username + "!");
                navigate("/profile");
            }
        })
        .catch(error => {
            window.alert(error);
            return;
        });
    }
    return <div className='login'>
        <h1>Login</h1>
        <label>Username</label>
        <input 
            type="text" 
            placeholder="Username"
            onChange={(e) => {
                setUsernameReg(e.target.value);
            }}
        />
        <label>Password</label>
        <input 
            type="password" 
            placeholder="password"
            onChange={(e) => {
                setPasswordReg(e.target.value);
            }}
        />
        <button onClick={onSubmit}>Login</button>
    </div>
}