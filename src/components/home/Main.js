import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';
import api from '../../api';

const mapStateToProps = state => {
    return {
        ...state.articleList,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTabClick: (payload) => {
            //console.log(payload);
            dispatch({ type: CHANGE_TAB, payload });
        }
    }
}

const GlobalFeed = props => {
    const handleClick = e => {
        e.preventDefault();
        props.onTabClick(api.Articles.all());
    }

    return (
        <div>
            <a href="" onClick={handleClick}>globalFeed</a>
        </div>
    )
}

const Main = props => {
    return (
        <div>
            <GlobalFeed onTabClick={props.onTabClick} />
            <h1>{props.articlesCount}</h1>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);