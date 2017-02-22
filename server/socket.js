import { SearchUsers, RequestFriend } from './controllers/User';

export default function Socket(io) {
  io.on('connection', (socket) => {
    socket.on('search:users', (q) => {
      const query = SearchUsers(q);

      query.then((results) => {
        socket.emit('users:found', results);
      }, (err) => {
        socket.emit('error', err);
      });
    });

    socket.on('user:addFriend', (data) => {
      const request = RequestFriend(data.userId, data.friendId);

      request.then((doc) => {
        socket.emit('new:notification', doc);
      }, (err) => {
        socket.emit('client:error', err);
      });
    });

    socket.on('post:message', (message) => {
      io.emit('message:added', message);
    });
  });
}
