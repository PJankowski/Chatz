import React from 'react';

import IconButton from '../IconButton';
import Notifications from '../Notifications';

import './NotificationWrapper.css';

function NotificationWrapper({ notifications }) {
  return (
    <div className="NotificationWrapper">
      <IconButton icon="notifications" />

      { notifications.length > 0 ?
        <div className="NotificationIcon" />
      : null }

      <Notifications />
    </div>
  );
}

NotificationWrapper.propTypes = {
  notifications: React.PropTypes.array.isRequired,
};

export default NotificationWrapper;
