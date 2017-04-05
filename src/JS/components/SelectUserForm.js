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
    this.props.subscribeUsers();
  }

  gotoNewUsrForm() {
    window.location.href ='/NewUser';
  }

  render() {

    let users;
    if(this.props.users.users.length > 0) {
      users = this.props.users.users.map(user => 
        <option key={ user.id }>{ user.firstName } { user.lastName }</option>
      )
    }

    return(
      <form className='user-form form-horizontal'>
        <h2>Select User</h2>
        <select className='users-list form-control' >
          { users }
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