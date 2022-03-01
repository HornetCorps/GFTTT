import React from 'react';
import './ViewButton.css';
import { Link } from 'react-router-dom';

const STYLES = ['viewbtn--primary', 'viewbtn--outline'];

const SIZES = ['viewbtn--medium', 'viewbtn--large'];

export const ViewButton = ({
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
        <Link to='/viewCharacter' className='viewbtn-mobile'>
            <button
            className={`viewbtn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>


        </Link>
    )
};

