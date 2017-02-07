import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/LoginForm';
import Chat from '../Chat';
import Sidebar from '../Sidebar';

@connect((store) => {
  return {
    user: store.user.user.id,
  };
})

class App extends Component {
  render() {
    return (
      <div>
        { this.props.user !== '' ? (<div className="App"><Sidebar /><Chat /></div>) : <LoginForm /> }
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
