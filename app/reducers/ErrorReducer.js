export default function reducer(state = {
  status: '',
  message: '',
}, action) {
  switch (action.type) {
    case 'USER_LOGIN_ERROR': {
      const { status, message } = action.payload;
      return {
        ...state,
        status,
        message,
      };
    }
    case 'CLEAR_ERROR': {
      return {
        ...state,
        status: '',
        message: '',
      };
    }
    default: {
      break;
    }
  }

  return state;
}
