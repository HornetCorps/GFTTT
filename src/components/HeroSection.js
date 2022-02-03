import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Welcome</h1>
            <p>Start Your Adventure Now</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Join Game </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Create Game </Button>
            </div>


        
        
             
        </div>
    )
}

export default HeroSection
