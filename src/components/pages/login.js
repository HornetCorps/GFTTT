import React from 'react';
import '../../App.css';
import './login.css';
export default function Login() {
    return <div className='login'>

    <h1>Login</h1>
    <label>Username</label>
    <input type="text" placeholder="Username"/>
    <label>Password</label>
    <input type="password" placeholder="password"/>
    <button>Login</button>
    
    </div>
}