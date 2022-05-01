import React from 'react';

import './Button.css';

interface IButtonProps {
    color?: 'primary' | 'secondary' | 'default';
    fullWidth?: boolean;
}

const Button: React.FC<IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { color = 'default', fullWidth = false, children, ...buttonProps } = props;

    return (
        <button className={`Button Button_color_${color} ${fullWidth ? 'Button_fullWidth' : ''}`} {...buttonProps}>
            {children}
        </button>
    );
};

export default Button;
