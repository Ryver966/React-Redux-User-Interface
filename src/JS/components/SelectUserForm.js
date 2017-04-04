import React, { Component } from 'react';
import '../../styles/CSS/WelcomeScreen.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { subscribeUsers } from '../actions/actions';

class SelectUserForm extends Component {

  constructor(props) {
    super(props);
    this.gotoNewUsrForm = this.gotoNewUsrForm.bind(this)
  }

  componentWillMount() {
    this.props.subscribeUsers;
  }

  gotoNewUsrForm() {
    window.location.href ='/NewUser';
  }

  render() {
    this.props.subscribeUsers();
    return(
      <form className='user-form form-horizontal'>
        <h2>Select User</h2>
        <select className='user-gender form-control'>
          <option>All</option>
          <option>Male</option>
          <option>Female</option>
        </select><br />
        <select className='users-list form-control' >
          <option>{ this.props.users }</option>
        </select><br />
        <input type='button' className='form-control btn-success' value='Select' />
        <input type='button' onClick={ this.gotoNewUsrForm } className='form-control btn-info' value='Create New User' />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function matchDispatchToProps(dispatch) {
  return {
    subscribeUsers: () => dispatch(subscribeUsers())
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectUserForm);