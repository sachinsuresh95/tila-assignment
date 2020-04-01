import React from 'react';
import ReactDOM from 'react-dom';

import reducer from './redux/reducers'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import App from './components/App';

const logMiddleware = createLogger()
const store = createStore(
  reducer, applyMiddleware(thunkMiddleware, logMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


