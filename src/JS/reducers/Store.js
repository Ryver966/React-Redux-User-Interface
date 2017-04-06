import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Users from './reducer-users';
import SelectedUser from './reducer-active-user';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux';
import { browserHistory } from 'react-router';

const reducersContainer = combineReducers({
  routing: routerReducer,
  users: Users,
  selectedUser: SelectedUser
});

export const store = createStore(reducersContainer, applyMiddleware(thunk, routerMiddleware(browserHistory)));
export const history = syncHistoryWithStore(browserHistory, store);

export default reducersContainer;