import React, { Component } from 'react';
import { connect } from 'react-redux';
import Socket from '../../socket'

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

  addMessage(value) {
    const { username, avatar, id } = this.props;
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
    Socket.postMessage(data);
  }

  render() {
    const Messages = this.props.messages.map(message =>
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
  username: React.PropTypes.string,
  avatar: React.PropTypes.string,
  id: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  messages: React.PropTypes.array,
};

Chat.defaultProps = {
  username: '',
  avatar: '',
  id: '',
  dispatch: () => {},
  messages: [],
};

export default Chat;
