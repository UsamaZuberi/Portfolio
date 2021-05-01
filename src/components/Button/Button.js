import React from 'react';
import './Button.scss';

function Button({ text, onClick, type }) {
    return (
        <input type={type} className="button" title={text} value={text} onClick={onClick} />
    )
}

export default Button
