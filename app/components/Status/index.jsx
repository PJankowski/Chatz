import React from 'react';
import classnames from 'classnames';

import './Status.css';

function Status({ status }) {
  const classes = classnames({
    Status: true,
    'Status--online': status === 'online',
    'Status--away': status === 'away',
  });

  return (
    <span className={classes} />
  );
}

Status.propTypes = {
  status: React.PropTypes.string,
};

Status.defaultProps = {
  status: 'offline',
};

export default Status;
