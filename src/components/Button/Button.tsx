import React from 'react';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { children, ...buttonProps } = props;

    return <button {...buttonProps}>{children}</button>;
};

export default Button;
