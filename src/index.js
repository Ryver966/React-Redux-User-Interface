import React from 'react';
import ReactDOM from 'react-dom';
import App from './JS/App';
import './styles/CSS/index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducersContainer from './JS/reducers/Store';

ReactDOM.render(
  <Provider store={ createStore(reducersContainer, undefined, applyMiddleware(thunk)) }>
    <App />
  </Provider>,
  document.getElementById('root')
);
