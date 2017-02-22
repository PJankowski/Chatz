export default function SetNotification(notification) {
  return (dispatch) => {
    dispatch({ type: 'RECEIVE_NOTIFICATION', payload: notification });
  };
}
