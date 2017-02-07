import React, { Component } from 'react';

import MessageInput from '../MessageInput/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessageForm = this.submitMessageForm.bind(this);
  }

  updateMessage(value) {
    this.setState({
      message: value,
    });
  }

  submitMessageForm(evt) {
    evt.preventDefault();
    this.props.addMessage(this.state.message);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.submitMessageForm} className="MessageForm">
        <MessageInput updateMessage={this.updateMessage} inputValue={this.state.message} />
      </form>
    );
  }
}

MessageForm.propTypes = {
  addMessage: React.PropTypes.func.isRequired,
};

export default MessageForm;
