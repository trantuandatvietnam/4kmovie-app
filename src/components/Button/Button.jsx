import React from 'react';
import PropTypes from 'prop-types';
Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

function Button({ onClick = null, className = '', children }) {
  return (
    <button className={`btn ${className}`} onClick={() => onClick()}>
      {children}
    </button>
  );
}

function OutlineButton({ onClick = null, className = '', children }) {
  return (
    <Button className={`btn-outline ${className}`} onClick={() => onClick()}>
      {children}
    </Button>
  );
}

export { OutlineButton };
export default Button;
