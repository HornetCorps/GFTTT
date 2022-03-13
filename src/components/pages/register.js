import '../../App.css';
import './register.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router";

export default function Register() {
    const navigate = useNavigate();
    
    const [email, setEmailReg] = useState();
    const [username, setUsernameReg] = useState();
    const [password, setPasswordReg] = useState();
    
    async function onSubmit(e) {
        let newUser = {email, username,password};
        e.preventDefault();

        if(email == null || username == null || password == null){
            window.alert("All fields required.");
            return;
        }

        if(password.length <= 8){
            window.alert("Passwords must be at least 8 characters");
            return;
        }

        await fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser),
        })
        .then(res => {
            if(res.status === 422){
                window.alert("User already exists");
                navigate("/login");
            }
            if(res.status === 200){
                window.alert("Registation successful");
                navigate("/profile");
            }
        })
        .catch(error => {
          window.alert(error);
          return;
        });
    }

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
            placeholder="Password"
            onChange={(e) => {
                setPasswordReg(e.target.value);
            }}
        />
        <button onClick={onSubmit}>Register</button>
    </div>
}