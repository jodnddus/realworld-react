import React from 'react';
import { connect } from 'react-redux';
import api from '../../api';
import './MainView.css';
import {
    CHANGE_TAB,
} from '../../constants/actionTypes';
import ArticleList from '../ArticleList';

const YourFeed = props => {
    if (props.token) {
        const handleClick = e => {
            console.log("handleClick");
            e.preventDefault();
            Promise.resolve(api.Articles.feed()).then((res) => {
                props.onTabClick("feed", res);
            });
        }
        return (
            <a 
                href="''" 
                onClick={handleClick} 
                className={ props.tab === "feed" ? "active" : "feed-tabs" }>
                YourFeed
            </a>
        );
    }
    return null;
}

const GlobalFeed = props => {
    const handleClick = e => {
        e.preventDefault();
        Promise.resolve(api.Articles.all()).then((res) => {
            props.onTabClick("all", res);
        });
    }

    return (
        <a 
            href="''" 
            onClick={handleClick} 
            className={ props.tab === "all" ? "active" : "feed-tabs" }>
            GlobalFeed
        </a>
    );
}

const TagFilterTab = props => {
    if (!props.tag) {
        return null;
    }

    return (
        <li className="nav-item">
            <a href="''" className="nav-link">
                <i className="ion-pound"></i> #{props.tag}
            </a>
        </li>
    )
}

const mapStateToProps = state => ({
    ...state.articleList,
    tags: state.home.tags,
    token: state.common.token
});

const mapDispatchToProps = dispatch => ({
    onTabClick: (tab, payload) => dispatch({ type: CHANGE_TAB, tab, payload })
});

const MainView = props => {
    return (
        <div className="MainView">
            <div className="tabs">
                <GlobalFeed onTabClick={props.onTabClick} tab={props.tab} />
                <YourFeed token={props.token} tab={props.tab} onTabClick={props.onTabClick} />
                <TagFilterTab tag={props.tag} />
                <hr />
            </div>
            <ArticleList articles={props.articles} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);