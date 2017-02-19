import React, { Component } from 'react';
import { connect } from 'react-redux';
import IO from 'socket.io-client';

import clearError from '../../actions/ErrorActions';

import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';
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
      isLogin: true,
      isSignup: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.changeAuthForm = this.changeAuthForm.bind(this);
  }

  changeAuthForm() {
    this.setState({
      isLogin: !this.state.isLogin,
      isSignup: !this.state.isSignup,
    });
  }

  handleClose() {
    this.props.dispatch(clearError());
  }

  render() {
    let auth;
    if (this.state.isLogin) {
      auth = <LoginForm changeAuthForm={this.changeAuthForm} />;
    } else if (this.state.isSignup) {
      auth = <SignupForm changeAuthForm={this.changeAuthForm} />;
    } else {
      auth = null;
    }

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
          (
            <div className="App">
              <Sidebar socket={this.state.socket} />
              <Main socket={this.state.socket} />
            </div>
          )
          : auth
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
