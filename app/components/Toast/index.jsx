import React from 'react';
import classnames from 'classnames';

import './Toast.css';

function Toast({ type, status, message, handleClose }) {
  const toastClasses = classnames({
    Toast: true,
    'Toast--Success': type.toLowerCase() === 'success',
    'Toast--Error': type.toLowerCase() === 'error',
    'Toast--Warn': type.toLowerCase() === 'warning',
  });

  (() => {
    setTimeout(() => {
      handleClose();
    }, 3500);
  })();

  return (
    <button className={toastClasses} onClick={handleClose}>
      <h2 className="Toast__Status">{ status.toUpperCase() }</h2>
      <p className="Toast__Message">{ message }</p>
    </button>
  );
}

Toast.propTypes = {
  type: React.PropTypes.string,
  status: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
  handleClose: React.PropTypes.func.isRequired,
};

Toast.defaultProps = {
  type: '',
};

export default Toast;
