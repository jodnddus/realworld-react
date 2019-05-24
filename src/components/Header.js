import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const LoggedOutView = props => {
    return (
        <div className="Header">
            <h1 id="page-name">Pasan</h1>
            <ul>
                <li className="nav-item">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login">
                        Sign In
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register">
                        Sign Up
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default LoggedOutView;