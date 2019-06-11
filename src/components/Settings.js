import React from 'react';
import { connect } from 'react-redux';
import api from '../api';
import {
  LOGOUT,
} from '../constants/actionTypes';
import './Settings.css';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
})

class Settings extends React.Component {
  render() {
    return (
      <div className="logout">
        <button
          className="logout-btn"
          onClick={this.props.onClickLogout}>
          Or click here to logout.
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);