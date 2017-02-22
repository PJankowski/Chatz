import React from 'react';

import Notification from '../Notification';

function UserFace({ notifications }) {
  return (
    <a href="#" className="face-wrapper">
      <i className="material-icons">face</i>
      { notifications.length > 0 ?
        <Notification />
      : null }
    </a>
  );
}

UserFace.propTypes = {
  notifications: React.PropTypes.array.isRequired,
};

export default UserFace;
