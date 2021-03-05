import React from 'react';
import Button from 'react-bootstrap/Button';

function CustomButton(props) {
    const { variant, children, ...rest} = props;
    return (
        <Button variant={`${variant}`} {...rest}>{children}</Button>
    )
}

export default CustomButton
