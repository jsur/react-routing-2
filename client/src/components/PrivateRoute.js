import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { client } from '../Client';

// Higher-order component, i.e. a component that wraps another
// component and adds some custom functionality to it.

// Here we benefit from having one Route component that can be used to
// render private routes or always redirect to login

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={(props) => (
    client.isLoggedIn() ? (
      // if logged in, create the element that's passed in from App.js
      // which in this case is AlbumsContainer
      React.createElement(component, props)
    ) : (
      // otherwise we're going back to /login
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

export default PrivateRoute;
