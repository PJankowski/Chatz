import React from 'react';
import classnames from 'classnames';

import './Notifications.css';

import NotificationsList from '../NotificationsList';

function Notifications({ isShowing }) {
  const NotificationsClasses = classnames({
    Notifications: true,
    isShowing,
  });

  return (
    <div className={NotificationsClasses}>
      <div className="Notifications__Header">
        <h2>Notifications</h2>
      </div>

      <NotificationsList notifications={[{ username: 'Username', avatar: 'https://api.adorable.io/avatars/285/abott.png', message: 'This is where the notification text will show up.' }, { username: 'Username', avatar: 'https://api.adorable.io/avatars/285/abott.png', message: 'This is where the notification text will show up.' }, { username: 'Username', avatar: 'https://api.adorable.io/avatars/285/abott.png', message: 'This is where the notification text will show up.' }]} />
    </div>
  );
}

Notifications.propTypes = {
  isShowing: React.PropTypes.bool,
};

Notifications.defaultProps = {
  isShowing: false,
};

export default Notifications;
