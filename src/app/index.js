import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppContainer from './components/App_container';

import logicMiddleware from './middleware/main';

import rootReducer from './reducers/index';

import './components/bundle.scss';

const store = createStore(rootReducer, applyMiddleware(logicMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('root'));
