import React, { Component } from 'react';
import '../../styles/CSS/AppBody.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { addUser } from '../actions/actions';

export default class NewUserForm extends Component {

  constructor(props) {
    super(props);
    this.createUser = this.createUser.bind(this);
    this.closeAlert = this.closeAlert.bind(this);

    this.state = {
      isNewUserCreated: false,
      newUserNotCreated: false
    }
  }

  closeAlert() {
    this.setState({
      isNewUserCreated: false,
      newUserNotCreated: false
    })
  }

  createUser() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const age = document.getElementById('age');
    const gender = document.getElementById('gender');

    if(firstName.value.length === 0 || lastName.value.length === 0 || age.value.length === 0 || gender.value.length === 0) {
      this.setState({
        newUserNotCreated: true,
        isNewUserCreated: false
      })
    } else {
      this.setState({
        newUserNotCreated: false,
        isNewUserCreated: true
      })
      addUser(firstName.value, lastName.value, age.value, gender.value);
      firstName.value = '';
      lastName.value = '';
      age.value = '';
      gender.value = '';
    }
  }

  render() {
    return(
      <div>
        <div className={ `alert alert-danger ${ this.state.newUserNotCreated ? 'fade in' : 'hide' }` }>
          <a href='#' onClick={ this.closeAlert } className='close' data-dismiss='alert' aria-label='close'>&times;</a>
          <strong>Error!</strong> Please check all fields.
        </div>
        <div className={ `alert alert-success ${ this.state.isNewUserCreated ? 'fade in' : 'hide' }` }>
          <a href='#' onClick={ this.closeAlert } className='close' data-dismiss='alert' aria-label='close'>&times;</a>
          <strong>Success!</strong> New user created.
        </div>
        <form className='user-form form-horizontal'>
          <h1>Create User</h1>
          <input type='text' className='form-control' id='first-name' placeholder='First Name' />
          <input type='text' className='form-control' id='last-name' placeholder='Last Name' /><br />
          <input type='number' className='form-control' id='age' placeholder='Age' />
          <div className='form-group'>
            <label htmlFor='gender'>Gender:</label>
            <select id='gender' className='form-control'>
              <option></option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <input type='button' onClick={ this.createUser } className='form-control btn-success' value='Create User' />
          <input type='button' onClick={ this.props.goBack } className='form-control btn-primary' value='Go Back' />
        </form>
      </div>
    )
  }
}