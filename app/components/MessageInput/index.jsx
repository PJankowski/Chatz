import React, { Component } from 'react';

class MessageInput extends Component {
  constructor(props) {
    super(props);

    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged() {
    this.props.updateMessage(this.messageRef.value);
  }

  render() {
    return (
      <input
        onChange={this.inputChanged}
        className="MessageForm__input"
        type="text"
        placeholder="Send a message!"
        value={this.props.inputValue}
        ref={(ref) => { this.messageRef = ref; }}
      />
    );
  }
}

MessageInput.propTypes = {
  updateMessage: React.PropTypes.func.isRequired,
  inputValue: React.PropTypes.string.isRequired,
};

export default MessageInput;
