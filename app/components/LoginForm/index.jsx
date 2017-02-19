import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { UserLogin } from '../../actions/UserActions';

import Button from '../Button';
import Toast from '../Toast';

import './LoginForm.css';

@connect((store) => {
  return {
    user: store.user.user,
  };
})

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login(evt) {
    evt.preventDefault();

    const data = {
      username: this.usernameRef.value,
      password: this.passwordRef.value,
    };

    this.props.dispatch(UserLogin(data));
  }

  render() {
    return (
      <div className="LoginWrapper">
        <Toast type="error" status="Error" message="This is an error message." />
        <form className="LoginForm" onSubmit={this.login}>
          <h3>Start chatting!</h3>
          <input type="text" placeholder="Username" ref={(ref) => { this.usernameRef = ref; }} />
          <input type="password" placeholder="Password" ref={(ref) => { this.passwordRef = ref; }} />
          <Button type="submit" text="Login" />
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func,
};

LoginForm.defaultProps = {
  dispatch: () => {},
};

export default LoginForm;
