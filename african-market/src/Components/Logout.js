import React from 'react';

class Logout extends React.Component {

  logout = (e) => {
    e.preventDefault();
    localStorage.setItem('token', '');
    this.props.history.push('/')
  }

  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}

export default Logout;