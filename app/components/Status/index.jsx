import React from 'react';

import './Status.css';

function Status({ status }) {
  return (
    <span className="Status Status--online" />
  );
}

Status.propTypes = {
  status: React.PropTypes.string,
};

Status.defaultProps = {
  status: 'offline',
};

export default Status;
