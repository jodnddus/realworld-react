import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/home';
import Header from './Header';
import Login from './Login';
import Article from './Article';
import api from '../api';
import './App.css';
import {
  APP_LOAD,
  REDIRECT,
} from '../constants/actionTypes';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
    token: state.common.token
}};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {

  componentWillMount() {
    const token = localStorage.getItem('jwt');
    if(token) {
      api.setToken(token);
    }

    Promise.resolve(api.Auth.current()).then((res) => {
      this.props.onLoad(res, token);
    });
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header currentUser={this.props.currentUser} token={this.props.token} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/article/:id" component={Article} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
