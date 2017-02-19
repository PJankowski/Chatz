export default function reducer(state = {
  user: {
    id: '',
    username: '',
    status: '',
    avatar: '',
    name: {
      first: '',
    },
  },
  error: {
    status: '',
    message: '',
  },
}, action) {
  switch (action.type) {
    case 'USER_LOGGED_IN': {
      const { id, username, status, avatar, name } = action.payload;
      return {
        ...state,
        user: {
          id,
          username,
          status,
          avatar,
          name: {
            first: name.first,
          },
        },
      };
    }
    case 'USER_LOGIN_ERROR': {
      const { status, message } = action.payload;
      return {
        ...state,
        error: {
          status,
          message,
        },
      };
    }
    default: {
      break;
    }
  }

  return state;
}
