import React from 'react';
import './DeleteButton.css';
import { Link } from 'react-router-dom';

const STYLES = ['deletebtn--primary', 'deletebtn--outline'];

const SIZES = ['deletebtn--medium', 'deletebtn--large'];

export const DeleteButton = ({
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
        <Link to='/inventory' className='deletebtn-mobile'>
            <button
            className={`deletebtn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>


        </Link>
    )
};

