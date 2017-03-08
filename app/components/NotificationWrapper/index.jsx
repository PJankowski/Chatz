import React from 'react';

import IconButton from '../IconButton';
import Notifications from '../Notifications';

import './NotificationWrapper.css';

function NotificationWrapper({ notifications, isShowing, showNotifications }) {
  return (
    <div className="NotificationWrapper">
      <IconButton icon="notifications" onClick={showNotifications} />

      { notifications.length > 0 ?
        <div className="NotificationIcon" />
      : null }

      <Notifications notifications={notifications} isShowing={isShowing} />
    </div>
  );
}

NotificationWrapper.propTypes = {
  notifications: React.PropTypes.array.isRequired,
  isShowing: React.PropTypes.bool,
  showNotifications: React.PropTypes.func.isRequired,
};

NotificationWrapper.defaultProps = {
  isShowing: false,
};

export default NotificationWrapper;
