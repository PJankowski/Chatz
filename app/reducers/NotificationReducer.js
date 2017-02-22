export default function reducer(state = {
  notifications: [],
}, action) {
  switch (action.type) {
    case 'RECEIVE_NOTIFICATION': {
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    }
    default: {
      break;
    }
  }

  return state;
}
