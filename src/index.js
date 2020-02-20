import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Main } from './pages';
import './index.css';
import { store } from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);
