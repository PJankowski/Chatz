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
            status: 'online',
          },
        });
      })
      .catch((err) => {
        const { status, message } = err.response.data;
        dispatch({ type: 'SET_ERROR',
          payload: {
            status,
            message,
          },
        });
      });
  };
}

export function UserSignup(user) {
  return (dispatch) => {
    axios.post('/api/signup', { username: user.username, password: user.password })
      .then((data) => {
        dispatch({ type: 'USER_SIGNUP',
          payload: {
            id: data.data._id,
            username: data.data.username,
            name: { first: 'User' },
            avatar: 'https://api.adorable.io/avatars/285/abottwedwefoi.png',
            status: 'online',
          },
        });
      })
      .catch((err) => {
        const { status, message } = err.response.data;
        dispatch({ type: 'SET_ERROR',
          payload: {
            status,
            message,
          },
        });
      });
  };
}
