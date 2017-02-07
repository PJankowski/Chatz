export default function reducer(state = {
  messages: [],
}, action) {
  switch (action.type) {
    case 'MESSAGE_SENT': {
      const { id, user, text, date } = action.payload;
      return {
        ...state,
        messages: [
          ...state,
          { id,
            user:
            { id: user.id, avatar: user.avatar, username: user.username },
            text,
            date },
        ],
      };
    }
    default: {
      break;
    }
  }

  return state;
}
