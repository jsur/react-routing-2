import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { client } from '../Client';

// Just render Logout on logout action, which will in turn
// render Redirect. 
class Logout extends Component {
  constructor(props) {
    super(props);

    client.logout();
  }

  render() {
    return (
      <Redirect
        to='/login'
      />
    );
  }
}

export default Logout;
