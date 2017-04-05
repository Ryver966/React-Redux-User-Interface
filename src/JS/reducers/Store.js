import { combineReducers } from 'redux';
import Users from './reducer-users';
import SelectedUser from './reducer-active-user';

const reducersContainer = combineReducers({ 
  users: Users,
  selectedUser: SelectedUser
});


export default reducersContainer;