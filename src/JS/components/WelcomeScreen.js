import React, { Component } from 'react';
import '../../styles/CSS/WelcomeScreen.css';

export default class WelcomeScreen extends Component {
  render() {
    return(
      <div className='main-container'>
        { this.props.children }
      </div>
    )
  }
}