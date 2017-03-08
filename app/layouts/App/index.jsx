import React, { Component } from 'react';
import { connect } from 'react-redux';
import IO from 'socket.io-client';

import { setError, clearError } from '../../actions/ErrorActions';
import { GetUser } from '../../actions/UserActions';

import Sidebar from '../Sidebar';
import Main from '../Main';
import Toast from '../../components/Toast';

import Storage from '../../utils/storage';

@connect((store) => {
  return {
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
    const token = Storage.get('chatz_token');
    if (token) {
      this.props.dispatch(GetUser(token));
    }

    this.state.socket.on('client:error', (err) => {
      this.props.dispatch(setError(err));
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
        <div className="App">
          <Sidebar socket={this.state.socket} />
          <Main socket={this.state.socket} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  error: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

App.defaultProps = {
  error: {},
  dispatch: () => {},
};

export default App;
