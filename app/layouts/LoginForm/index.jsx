import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { UserLogin } from '../../actions/UserActions';

import Button from '../../components/Button';

import './LoginForm.css';

@connect(store => store)

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
        <form className="LoginForm" onSubmit={this.login}>
          <h3>Start chatting!</h3>
          <input type="text" placeholder="Username" ref={(ref) => { this.usernameRef = ref; }} />
          <input type="password" placeholder="Password" ref={(ref) => { this.passwordRef = ref; }} />
          <Button type="submit" text="Login" />
          <a href="" onClick={this.props.changeAuthForm}>...Or Signup</a>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func,
  changeAuthForm: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  dispatch: () => {},
};

export default LoginForm;
