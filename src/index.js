import React from 'react';
import ReactDOM from 'react-dom';
import App from './JS/App';
import './styles/CSS/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducersContainer from './JS/reducers/Store';

ReactDOM.render(
  <Provider store={ createStore(reducersContainer) }>
    <App />
  </Provider>,
  document.getElementById('root')
);
