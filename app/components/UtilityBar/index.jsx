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
      isSearching: false,
    };

    this.startSearching = this.startSearching.bind(this);
    this.stopSearching = this.stopSearching.bind(this);
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

  startSearching() {
    this.setState({
      isSearching: true,
    });
  }

  stopSearching() {
    this.setState({
      isSearching: false,
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
          isSearching={this.state.isSearching}
          startSearching={this.startSearching}
          stopSearching={this.stopSearching}
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
