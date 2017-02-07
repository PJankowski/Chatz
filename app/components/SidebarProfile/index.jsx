import React from 'react';

import AvatarWrapper from '../AvatarWrapper/index';

function SidebarProfile({ name, avatar, status }) {
  return (
    <div className="Sidebar__profile">
      <AvatarWrapper avatar={avatar} status={status} />
      <h3 className="Sidebar__welcome">Welcome, {name}!</h3>
    </div>
  );
}

SidebarProfile.propTypes = {
  name: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string,
  status: React.PropTypes.string,
};

SidebarProfile.defaultProps = {
  avatar: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
  status: 'offline',
};

export default SidebarProfile;
