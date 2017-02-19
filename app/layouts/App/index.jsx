import React, { Component } from 'react';
import { connect } from 'react-redux';
import IO from 'socket.io-client';

import clearError from '../../actions/ErrorActions';

import LoginForm from '../../components/LoginForm';
import Sidebar from '../Sidebar';
import Main from '../Main';

import Toast from '../../components/Toast';

@connect((store) => {
  return {
    user: store.user.user.id,
    error: store.error,
  };
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: new IO(''),
    };

    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.state.socket.on('error:addFriend', (err) => {
      alert(JSON.stringify(err));
    });
  }

  handleClose() {
    this.props.dispatch(clearError());
  }

  render() {
    return (
      <div>
        { this.props.error.status !== '' ?
          <Toast
            type={this.props.error.status.toLowerCase()}
            status={this.props.error.status}
            message={this.props.error.message}
            handleClose={this.handleClose}
          />
        : null }
        {
          this.props.user !== '' ?
          (<div className="App"><Sidebar socket={this.state.socket} /><Main socket={this.state.socket} /></div>)
          : <LoginForm />
        }
      </div>
    );
  }
}

App.propTypes = {
  user: React.PropTypes.string,
  error: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

App.defaultProps = {
  user: '',
  error: {},
  dispatch: () => {},
};

export default App;
