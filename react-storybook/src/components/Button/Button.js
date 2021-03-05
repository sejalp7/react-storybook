import React from 'react';
import './Button.css';

function Button(props) {
    const { variant, children, ...rest} = props;
    return (
        <div>
            <button className={`button ${variant}`} {...rest}>{children}</button>
        </div>
    )
}

export default Button
