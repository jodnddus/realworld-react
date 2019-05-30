import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/home';
import Header from './Header';
import Login from './Login';
import api from '../api';
import {
  APP_LOAD,
  REDIRECT,
} from '../constants/actionTypes';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
}};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {

  componentWillMount() {
    const token = localStorage.getItem('jwt');
    if(token) {
      api.setToken(token);
    }

    this.props.onLoad(token ? api.Auth.current() : null, token);
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
