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
    default: {
      break;
    }
  }

  return state;
}
