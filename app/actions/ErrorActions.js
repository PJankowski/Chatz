export function clearError() {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ERROR' });
  };
}

export function setError(err) {
  const { status, message } = err;
  return (dispatch) => {
    dispatch({ type: 'SET_ERROR', payload: { status, message } });
  };
}
