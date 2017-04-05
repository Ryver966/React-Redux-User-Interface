import React, { Component } from 'react';
import '../../styles/CSS/AppBody.css';

export default class WelcomeScreen extends Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    window.location.href = '/';
  }

  render() {

    const childrenWithProps = React.Children.map(this.props.children, 
      (child) => React.cloneElement(child, {
        goBack: this.goBack
      })
    )

    return(
      <div className='main-container'>
        { childrenWithProps }
      </div>
    )
  }
}