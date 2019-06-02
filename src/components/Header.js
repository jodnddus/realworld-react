import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// 프레젠테이셔널 컴포넌트
const LoggedOutView = props => {
    if (!props.currentUser) {
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
    return null;
}

const LoggedInView = props => {
    if (props.currentUser) {
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
                        <Link to="/editor">
                            &nbsp;New Post
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/settings">
                            &nbsp;Settings
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to={`/@${props.currentUser.username}`}
                            className="nav-link">
                            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
                            {props.currentUser.username}
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
    return null;
}

const Header = props => {
    return (
        <React.Fragment>
            <LoggedOutView currentUser={props.currentUser} />
            <LoggedInView currentUser={props.currentUser} />
        </React.Fragment>
    );
}

export default Header;