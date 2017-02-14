import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Sidebar.css';

import UserSearch from '../../components/UserSearch';
import SidebarProfile from '../../components/SidebarProfile';
import SidebarFriend from '../../components/SidebarFriend';

@connect((store) => {
  return {
    first: store.user.user.name.first,
    avatar: store.user.user.avatar,
    status: store.user.user.status,
  };
})

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        {
          avatar: 'https://api.adorable.io/avatars/285/abott.png',
          name: 'DJ Brady',
        },
        {
          avatar: 'https://api.adorable.io/avatars/285/abottwedwefoi.png',
          name: 'SweatyyAF',
        },
      ],
    };

    this.searchUsers = this.searchUsers.bind(this);
  }

  searchUsers(evt) {
    this.props.socket.emit('search:users', evt.target.value);
  }

  render() {
    let count = 0;
    let key;
    const Friends = this.state.friends.map((friend) => {
      key = count += 1;
      return <SidebarFriend key={key} name={friend.name} avatar={friend.avatar} />;
    });

    return (
      <aside className="Sidebar">
        <UserSearch socket={this.props.socket} searchUsers={this.searchUsers} />

        <SidebarProfile
          name={this.props.first}
          avatar={this.props.avatar}
          status={this.props.status}
        />

        <ul className="Sidebar__Friends">
          {Friends}
        </ul>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  socket: React.PropTypes.object.isRequired,
  first: React.PropTypes.string,
  avatar: React.PropTypes.string,
  status: React.PropTypes.string,
};

Sidebar.defaultProps = {
  first: '',
  avatar: '',
  status: '',
};

export default Sidebar;
