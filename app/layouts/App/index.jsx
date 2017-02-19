import React, { Component } from 'react';
import { connect } from 'react-redux';
import IO from 'socket.io-client';

import LoginForm from '../../components/LoginForm';
import Sidebar from '../Sidebar';
import Main from '../Main';

@connect((store) => {
  return {
    user: store.user.user.id,
  };
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: new IO(''),
    };
  }

  componentDidMount() {
    this.state.socket.on('error:addFriend', (err) => {
      alert(JSON.stringify(err));
    });
  }

  render() {
    return (
      <div>
        { this.props.user !== '' ? (<div className="App"><Sidebar socket={this.state.socket} /><Main socket={this.state.socket} /></div>) : <LoginForm /> }
      </div>
    );
  }
}

App.propTypes = {
  user: React.PropTypes.string,
};

App.defaultProps = {
  user: '',
};

export default App;
