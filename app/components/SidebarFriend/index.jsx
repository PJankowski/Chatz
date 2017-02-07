import React from 'react';

import AvatarWrapper from '../AvatarWrapper/index';

function SidebarFriend({ avatar, name }) {
  return (
    <li>
      <AvatarWrapper avatar={avatar} status="online" />
      <p className="Sidebar__Friends__name">{name}</p>
    </li>
  );
}

SidebarFriend.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
};

export default SidebarFriend;
