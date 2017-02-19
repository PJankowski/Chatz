import { combineReducers } from 'redux';

import error from './ErrorReducer';
import user from './UserReducer';
import messages from './MessageReducer';

export default combineReducers({ error, user, messages });
