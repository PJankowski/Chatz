import React, { PropTypes } from 'react';

import './Button.css';

function Button({ text, type }) {
  return (
    <button className="Button" type={type}>{ text }</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
};

export default Button;
