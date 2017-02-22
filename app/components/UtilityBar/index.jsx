import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UtilityBar.css';

import UserSearch from '../UserSearch';

@connect((store) => {
  return {
    user: store.user.user.id,
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

        <a href="#">
          <i className="material-icons">face</i>
        </a>
      </header>
    );
  }
}

UtilityBar.propTypes = {
  user: React.PropTypes.string,
  socket: React.PropTypes.object.isRequired,
};

UtilityBar.defaultProps = {
  user: '',
};

export default UtilityBar;
