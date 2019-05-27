import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../api';
import {
    UPDATE_FIELD_AUTH,
    LOGIN,
    LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';
import './Login.css'

function Login() {
    //mapStateToProps, mapDIspatchToProps 대신 사용하는 react-redux의 hook! 엄청 쿨함!
    const authState = useSelector(state => state.auth);
    const authDispatch = useDispatch();

    const emailChange = e => authDispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value: e.target.value })
    const passwordChange = e => authDispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value: e.target.value });
    const submitForm = (email, password) => ev => {
        ev.preventDefault();
        console.log(1);
        Promise.resolve(api.Auth.login(email, password)).then((res) => {
            authDispatch({ type: LOGIN, payload: res });
        });
    };
    
    return (
        <div className="login-page">
            <h1>Sign In</h1>
            <form onSubmit={submitForm(authState.email, authState.password)}>
                <input
                    className="form-input"
                    placeholder="Email"
                    type="email"
                    onChange={emailChange} />
                <input
                    className="form-input"
                    placeholder="Password"
                    type="password"
                    onChange={passwordChange} />
                <button type="submit">Sign in</button>
                <h1>{authState.email}{authState.password}</h1>
            </form>
            <h1>{authState.token}</h1>
        </div>
    );
}

export default Login;