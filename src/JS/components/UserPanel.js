import React, { Component } from 'react';
import '../../styles/CSS/AppBody.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

class UserPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='user-panel-main'>
        <h1>{ this.props.user.firstName } { this.props.user.lastName }</h1>
        <div className='form-group'>
          <label htmlFor='age'>Age:</label>
          <p id='age'>{ this.props.user.age }</p>
        </div>
        <div className='form-group'>
          <label htmlFor='gender'>Gender:</label>
          <p id='gender'>{ this.props.user.gender }</p>
        </div>
        <input type='button' onClick={ this.props.goBack } className='btn btn-info' value='Go Back' />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser
  }
}

export default connect(mapStateToProps)(UserPanel);