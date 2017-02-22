import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UtilityBar.css';

import SetNotification from '../../actions/NotificationActions';

import UserSearch from '../UserSearch';
import UserFace from '../UserFace';

@connect((store) => {
  return {
    user: store.user.user.id,
    notifications: store.notifications.notifications,
  };
})

class UtilityBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.searchUsers = this.searchUsers.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  componentDidMount() {
    this.props.socket.on('new:notification', (notification) => {
      this.props.dispatch(SetNotification(notification));
    });

    this.props.socket.on('users:found', (users) => {
      this.setState({
        users,
      });
    });
  }

  searchUsers(evt) {
    this.props.socket.emit('search:users', evt.target.value);
  }

  addFriend(id) {
    this.props.socket.emit('user:addFriend', { userId: this.props.user, friendId: id });
  }

  render() {
    return (
      <header className="UtilityBar">
        <UserSearch
          users={this.state.users}
          searchUsers={this.searchUsers}
          addFriend={this.addFriend}
        />

        <UserFace notifications={this.props.notifications} />
      </header>
    );
  }
}

UtilityBar.propTypes = {
  socket: React.PropTypes.object.isRequired,
  user: React.PropTypes.string,
  notifications: React.PropTypes.array,
  dispatch: React.PropTypes.func,
};

UtilityBar.defaultProps = {
  user: '',
  notifications: [],
  dispatch: () => {},
};

export default UtilityBar;
