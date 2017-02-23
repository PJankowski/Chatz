import React from 'react';

import AvatarWrapper from '../AvatarWrapper/index';

function SidebarFriend({ avatar, name, status }) {
  return (
    <li>
      <AvatarWrapper avatar={avatar} status={status} />
      <p className="Sidebar__Friends__name">{name}</p>
    </li>
  );
}

SidebarFriend.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  status: React.PropTypes.string,
};

SidebarFriend.defaultProps = {
  status: 'offline',
};

export default SidebarFriend;
