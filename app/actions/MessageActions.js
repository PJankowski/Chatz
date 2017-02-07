export default function SendMessage(message) {
  return (dispatch) => {
    dispatch({ type: 'MESSAGE_SENT', payload: message });
  };
}
