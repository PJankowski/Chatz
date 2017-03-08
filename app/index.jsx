import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';

import store from './store';

import LoginForm from './layouts/LoginForm';
import SignupForm from './layouts/SignupForm';
import App from './layouts/App';

const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
    <Route path="/app" component={App} />
  </Router>
</Provider>, document.getElementById('root'));
