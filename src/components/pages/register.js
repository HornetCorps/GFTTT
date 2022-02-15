import React from 'react';
import '../../App.css';
import './register.css';
export default function Register() {
    return <div className='register'>

    <h1>Registration</h1>
    <label>E-mail</label>
    <input type="text"/>
    <label>Username</label>
    <input type="text" />
    <label>Password</label>
    <input type="password"/>
    <label>Re-Enter Password</label>
    <input type="password" />
    <button>Register</button>

    </div>
}