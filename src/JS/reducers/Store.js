import { combineReducers } from 'redux';
import Users from '../reducers/reducer-users';

const reducersContainer = combineReducers({ 
  users: Users
});


export default reducersContainer;