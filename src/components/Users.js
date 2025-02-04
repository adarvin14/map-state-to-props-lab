import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  

  render() {
    console.log(this.props.users)

    let allUsers = this.props.users.map(u => {
    return <li>{u.username},{u.hometown}</li>
    })

    return (
      <div>
        <ul>
          Users!
          {allUsers}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          <h4>{this.props.users.length}</h4>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
};

export default connect(mapStateToProps)(Users)