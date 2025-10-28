// src/components/ui/ButtonPrimary.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import './_button.scss';

const ButtonPrimary = ({ children, onClick, className = '', ...props }) => {
  return (
    <Button 
      className={`primary-btn ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;