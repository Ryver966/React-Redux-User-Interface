import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../styles/CSS/App.css';
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router';

import WelcomeScreen from './components/WelcomeScreen';
import SelectUserForm from './components/SelectUserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>User Interface</h2>
        </div>
        <Router history={ browserHistory }>
          <Route path='/' component={ WelcomeScreen }>
            <IndexRoute component={ SelectUserForm } />
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;