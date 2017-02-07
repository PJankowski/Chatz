import io from 'socket.io-client';

class Socket {
  constructor() {
    this.socket = io();
  }

  static postMessage(message) {
    // this.socket.emit('post:message', message);
    console.log(this.socket);
  }
}

export default Socket;
