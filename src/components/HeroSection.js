import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { RegisterButton } from './RegisterButton';
import { LoginButton } from './LoginButton';
function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Welcome</h1>
            <h2>Start Your Adventure Now</h2>
            <div className="hero-btns">
                <RegisterButton className='regbtns' buttonStyle='btn--outline' buttonSize='btn--large'> Register </RegisterButton>
                <LoginButton className='logibtns' buttonStyle='btn--outline' buttonSize='btn--large'>&nbsp; Login &nbsp; </LoginButton>
            </div>


        
        
             
        </div>
    )
}

export default HeroSection
