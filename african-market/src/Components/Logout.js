import React from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends React.Component {

  logout = (e) => {
    e.preventDefault();
    const { history } = this.props;
    localStorage.setItem('token', '');
    history.push('/')
  }

  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}

export default withRouter(Logout);