import React, { Component } from 'react';
import '../../styles/CSS/WelcomeScreen.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


export default class SelectUserForm extends Component {
  render() {
    return(
      <form className='select-user-form form-horizontal'>
        <h2>Select User</h2>
        <select className='form-group user-gender' placeholder='Select Gender'>
          <option></option>
          <option>Male</option>
          <option>Female</option>
        </select><br />
        <select className='form-group users-list' />
        <input type='button' className='form-control btn-success' value='Select' />
      </form>
    )
  }
}