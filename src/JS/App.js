import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../styles/CSS/App.css';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { history } from './reducers/Store';

import WelcomeScreen from './components/WelcomeScreen';
import SelectUserForm from './components/SelectUserForm';
import NewUserForm from './components/CreateNewUser';
import UserPanel from './components/UserPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>User Interface</h2>
        </div>
        <Router history={ history }>
          <Route path='/' component={ WelcomeScreen }>
            <IndexRoute component={ SelectUserForm } />
            <Route path='/NewUser' component={ NewUserForm } />
            <Route path='/UserPanel' component={ UserPanel } />
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;