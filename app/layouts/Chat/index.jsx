import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Chat.css';

import SendMessage from '../../actions/MessageActions';

import MessageForm from '../../components/MessageForm/index';

@connect((store) => {
  return {
    user: {
      username: store.user.user.username,
      avatar: store.user.user.avatar,
      id: store.user.user.id,
    },
    messages: store.messages.messages,
  };
})

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };

    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    this.props.socket.on('message:added', (message) => {
      this.setState({
        messages: [message, ...this.state.messages],
      });
    });
  }

  addMessage(value) {
    const { username, avatar, id } = this.props.user;
    const data = {
      id: Date.now(),
      user: {
        username,
        avatar,
        id,
      },
      text: value,
      date: Date.now(),
    };
    this.props.socket.emit('post:message', data); // eslint-disable-line react/prop-types
  }

  render() {
    const Messages = this.state.messages.map(message =>
      <li key={message.id}>{ message.text }</li>,
    );

    return (
      <div className="Chat">
        <div className="Chat__window">
          <h1>Chat Area!</h1>
          <ul>
            { Messages }
          </ul>
        </div>

        <MessageForm addMessage={this.addMessage} />
      </div>
    );
  }
}

Chat.propTypes = {
  user: {
    username: React.PropTypes.string,
    avatar: React.PropTypes.string,
    id: React.PropTypes.string,
  },
  messages: React.PropTypes.array,
};

Chat.defaultProps = {
  user: {
    username: '',
    id: '',
    avatar: '',
  },
  messages: [],
};

export default Chat;
