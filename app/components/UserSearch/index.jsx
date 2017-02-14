import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    user: store.user.user.id,
  };
})

class UserSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.addFriend = this.addFriend.bind(this);
  }

  componentDidMount() {
    this.props.socket.on('users:found', (users) => {
      this.setState({
        users,
      });
    });
  }

  addFriend(id) {
    this.props.socket.emit('user:addFriend', id);
  }

  render() {
    const Users = this.state.users.map((user) => {
      return (
        <li key={user._id}>{user.username}
          <button onClick={() => this.addFriend(user._id)}>+</button>
        </li>
      );
    });

    return (
      <div>
        <input type="text" onChange={this.props.searchUsers} />

        <ul>
          { Users }
        </ul>
      </div>
    );
  }
}

UserSearch.propTypes = {
  socket: React.PropTypes.object.isRequired,
  searchUsers: React.PropTypes.func.isRequired,
};

export default UserSearch;
