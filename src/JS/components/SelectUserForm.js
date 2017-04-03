import React, { Component } from 'react';
import '../../styles/CSS/WelcomeScreen.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


export default class SelectUserForm extends Component {

  constructor(props) {
    super(props);
    this.gotoNewUsrForm = this.gotoNewUsrForm.bind(this)
  }

  gotoNewUsrForm() {
    window.location.href ='/NewUser';
  }

  render() {
    return(
      <form className='user-form form-horizontal'>
        <h2>Select User</h2>
        <select className='form-group user-gender' placeholder='Select Gender'>
          <option disabled selected>Select user's gender</option>
          <option>Male</option>
          <option>Female</option>
        </select><br />
        <select className='form-group users-list' />
        <input type='button' className='form-control btn-success' value='Select' />
        <input type='button' onClick={ this.gotoNewUsrForm } className='form-control btn-info' value='Create New User' />
      </form>
    )
  }
}