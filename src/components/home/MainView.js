import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';
import api from '../../api';
import ArticleList from '../ArticleList';
import './MainView.css';

const mapStateToProps = state => {
    return {
        ...state.articleList,
        token: state.common.token,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTabClick: payload => {
            dispatch({ type: CHANGE_TAB, payload });
        }
    }
}
const YourFeed = props => {
    if (props.token) {
        const handleClick = e => {
            e.preventDefault();
            Promise.resolve(api.Articles.feed()).then((res) => {
                props.onTabClick(res);
            });
        }
        return (
            <a href="" onClick={handleClick} id="yourfeed-tab">YourFeed</a>
        );
    }
    return null;
}

const GlobalFeed = props => {
    const handleClick = e => {
        e.preventDefault();
        Promise.resolve(api.Articles.all()).then((res) => {
            props.onTabClick(res);
        });
    }

    return (
        <a href="" onClick={handleClick} id="globalfeed-tab">GlobalFeed</a>
    );
}

const Main = props => {
    return (
        <div>
            <ul>
                <GlobalFeed onTabClick={props.onTabClick} />
            </ul>
            <hr />
            <ArticleList articles={props.articles} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);