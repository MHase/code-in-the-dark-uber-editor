import React from 'react';

import './style.scss';

interface ButtonProps {
  children: React.ReactNode;
  className: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => (
  <button className={`Button ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
