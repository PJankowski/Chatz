import React from 'react';
import classnames from 'classnames';

import './Toast.css';

function Toast({ type, status, message, handleClose }) {
  const toastClasses = classnames({
    Toast: true,
    'Toast--Success': type === 'success',
    'Toast--Error': type === 'error',
    'Toast--Warn': type === 'warning',
  });
  return (
    <div className={toastClasses}>
      <i className="Toast__Close" onClick={handleClose}>X</i>
      <h2 className="Toast__Status">{ status.toUpperCase() }</h2>
      <p className="Toast__Message">{ message }</p>
    </div>
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
