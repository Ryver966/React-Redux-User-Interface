import React, { Component } from 'react';
import '../../styles/CSS/AppBody.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class UserPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='user-panel-main'>
        <h1>Name LastName</h1>
        <div className='form-group'>
          <label htmlFor='age'>Age:</label>
          <p id='age'>AGE</p>
        </div>
        <div className='form-group'>
          <label htmlFor='gender'>Gender:</label>
          <p id='gender'>GENDER</p>
        </div>
        <input type='button' onClick={ this.props.goBack } className='btn btn-info' value='Go Back' />
      </div>
    )
  }
}