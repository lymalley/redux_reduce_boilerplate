import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxApp from './reducers';
import App from './components/App';
import thunk from 'redux-thunk'

const middlewares = [thunk];
const store = createStore(
    reduxApp,
    applyMiddleware(...middlewares),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
