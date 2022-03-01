import React from 'react';
import './BuildButton.css';
import { Link } from 'react-router-dom';

const STYLES = ['buildbtn--primary', 'buildbtn--outline'];

const SIZES = ['buildbtn--medium', 'buildbtn--large'];

export const BuildButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/buildCharacter' className='buildbtn-mobile'>
            <button
            className={`buildbtn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>


        </Link>
    )
};
