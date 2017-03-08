import React from 'react';

import NotificationItem from '../NotificationsItem';

function NotificationsList({ notifications }) {
  const Items = notifications.map((notification) => {
    return (
      <NotificationItem notification={notification} />
    );
  });

  return (
    <ul className="Notifications__List">
      { Items }
    </ul>
  );
}

NotificationsList.propTypes = {
  notifications: React.PropTypes.array,
};

NotificationsList.defaultProps = {
  notifications: [],
};

export default NotificationsList;
