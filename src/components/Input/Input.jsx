import React from 'react';
import './Input.scss';

const Input = ({ value, onChange = null, type, placeholder }) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
