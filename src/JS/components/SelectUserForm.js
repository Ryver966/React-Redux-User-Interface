import React, { Component } from 'react';
import '../../styles/CSS/AppBody.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { subscribeUsers } from '../actions/actions';
import { selectUser } from '../actions/actions';


class SelectUserForm extends Component {

  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  componentWillMount() {
    this.props.subscribeUsers();
  }

  handleUser(e) {
    this.props.selectUser (
      this.props.users.users.find((user) => user.uid == e.target.options[e.target.selectedIndex].id )
    )
  }

  goTo(target) {
    window.location.href = target;
  }

  render() {
    let users;
    if(this.props.users.users.length > 0) {
      users = this.props.users.users.map(user => 
        <option id={ user.uid } key={ user.uid }>{ user.firstName } { user.lastName }</option>
      )
    }

    return(
      <form className='user-form form-horizontal'>
        <h2>Select User</h2>
        <select className='users-list form-control' onChange={ this.handleUser }>
          <option></option>
          { users }
        </select><br />
        <input type='button' onClick={ () => this.goTo('/UserPanel') } className='form-control btn-success' value='Select' />
        <input type='button' onClick={ () => this.goTo.bind('/NewUser') } className='form-control btn-info' value='Create New User' />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}

function matchDispatchToProps(dispatch) {
  return {
    subscribeUsers: () => dispatch(subscribeUsers()),
    selectUser: (selectedUser) => dispatch(selectUser(selectedUser))
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectUserForm);