import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import store from './store';

import App from './layouts/App';

ReactDom.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
