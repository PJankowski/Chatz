import React from 'react';

function NotificationsItem({ notification }) {
  return (
    <li className="Notifications__List__Item">
      <img className="Notifications__List__Item__Image" src={notification.avatar} alt={notification.username} />
      <div className="Notifications__List__Item__Info">
        <h3>{notification.username}</h3>
        <p>{notification.message}</p>
      </div>
    </li>
  );
}

NotificationsItem.propTypes = {
  notification: React.PropTypes.object,
};

NotificationsItem.defaultProps = {
  notification: {},
};

export default NotificationsItem;
