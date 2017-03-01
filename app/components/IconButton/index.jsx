import React, { PropTypes } from 'react';

import './IconButton.css';

function IconButton({ icon, onClick }) {
  return (
    <button className="IconButton" onClick={onClick}>
      <i className="material-icons">{ icon }</i>
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  onClick: () => {},
};

export default IconButton;
