import { combineReducers } from 'redux';

import error from './ErrorReducer';
import user from './UserReducer';
import messages from './MessageReducer';
import notifications from './NotificationReducer';

export default combineReducers({ error, user, messages, notifications });
