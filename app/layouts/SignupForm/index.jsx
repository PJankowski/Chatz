import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { UserSignup } from '../../actions/UserActions';

import Button from '../../components/Button';

import './SignupForm.css';

@connect(store => store)

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.signup = this.signup.bind(this);
  }

  signup(evt) {
    evt.preventDefault();

    const data = {
      username: this.usernameRef.value,
      password: this.passwordRef.value,
    };

    this.props.dispatch(UserSignup(data));
  }

  render() {
    return (
      <div className="SignupWrapper">
        <form className="SignupForm" onSubmit={this.signup}>
          <h3>Start chatting!</h3>
          <input type="text" placeholder="Username" ref={(ref) => { this.usernameRef = ref; }} />
          <input type="password" placeholder="Password" ref={(ref) => { this.passwordRef = ref; }} />
          <Button type="submit" text="Signup" />
          <a href="" onClick={this.props.changeAuthForm}>...Or Login</a>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  dispatch: PropTypes.func,
  changeAuthForm: PropTypes.func.isRequired,
};

SignupForm.defaultProps = {
  dispatch: () => {},
};

export default SignupForm;
