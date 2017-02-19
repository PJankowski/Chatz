export default function clearError() {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERROR' });
  };
}
