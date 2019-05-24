import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';
import api from '../../api';
import ArticleList from '../ArticleList';

const mapStateToProps = state => {
    return {
        ...state.articleList,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTabClick: payload => {
            dispatch({ type: CHANGE_TAB, payload });
        }
    }
}

const GlobalFeed = props => {
    const handleClick = e => {
        e.preventDefault();
        Promise.resolve(api.Articles.all()).then((res) => {
            props.onTabClick(res);
        });
    }

    return (
        <div>
            <a href="" onClick={handleClick}>GlobalFeed</a>
        </div>
    );
}

const Main = props => {
    return (
        <div>
            <ul>
                <GlobalFeed onTabClick={props.onTabClick} />
            </ul>
            <ArticleList articles={props.articles} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);