import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UtilityBar.css';

import SetNotification from '../../actions/NotificationActions';

import UserSearch from '../../components/UserSearch';
import NotificationWrapper from '../../components/NotificationWrapper';

@connect((store) => {
  return {
    user: store.user.user.id,
    requests: store.user.requests,
  };
})

class UtilityBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isSearching: false,
      showingNotifications: false,
    };

    this.startSearching = this.startSearching.bind(this);
    this.stopSearching = this.stopSearching.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.showNotifications = this.showNotifications.bind(this);
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

  showNotifications() {
    this.setState({
      showingNotifications: !this.state.showingNotifications,
    });
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

        <NotificationWrapper
          notifications={this.props.requests}
          isShowing={this.state.showingNotifications}
          showNotifications={this.showNotifications}
        />
      </header>
    );
  }
}

UtilityBar.propTypes = {
  socket: React.PropTypes.object.isRequired,
  user: React.PropTypes.string,
  requests: React.PropTypes.array,
  dispatch: React.PropTypes.func,
};

UtilityBar.defaultProps = {
  user: '',
  requests: [],
  dispatch: () => {},
};

export default UtilityBar;
