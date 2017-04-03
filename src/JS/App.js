import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/CSS/App.css';
import { Router, Route, Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>User Interface</h2>
        </div>
        { this.props.children }
      </div>
    );
  }
}
 export default App;