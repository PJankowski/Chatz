import axios from 'axios';

export function UserLogin(user) {
  return (dispatch) => {
    axios.post('/api/login', { username: user.username, password: user.password })
      .then((data) => {
        dispatch({ type: 'USER_LOGGED_IN',
          payload: {
            id: data.data._id,
            username: data.data.username,
            name: { first: 'Paul' },
            avatar: 'https://api.adorable.io/avatars/285/abottwedwefoi.png',
            status: 'online' } });
      });
  };
}
