import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../api';
import {
    UPDATE_FIELD_AUTH,
    LOGIN,
    LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';

/* const mapDispatchToProps = dispatch => ({
    onChangeEmail: value => dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
    onChangePassword: value => dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
    onSubmit: (email, password) => dispatch({ type: LOGIN, payload: api.Auth.login(email, password) }),
    onUnload: () =>
        dispatch({ type: LOGIN_PAGE_UNLOADED })
}) */

function Login() {
    const authState = useSelector(state => state.auth);
    const authDispatch = useDispatch();

    return (
        <div>
            <input placeholder="Email" type="email" onChange={e => authDispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value: e.target.value })} />
            <h1>{authState.email}</h1>
        </div>
    );
}

export default Login;