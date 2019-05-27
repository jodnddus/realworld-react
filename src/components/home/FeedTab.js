import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';
import api from '../../api';
import './FeedTab.css';

const YourFeed = props => {
    if (props.token) {
        const handleClick = e => {
            e.preventDefault();
            Promise.resolve(api.Articles.feed()).then((res) => {
                props.onTabClick(res);
            });
        }
        return (
            <a href="" onClick={handleClick} id="yourfeed-tab" className="feed-tabs">YourFeed</a>
        );
    }
    return null;
}

const GlobalFeed = () => {
    const articleDispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        Promise.resolve(api.Articles.all()).then((res) => {
            articleDispatch({ type: CHANGE_TAB, payload: res });
        });
    }

    return (
        <a href="" onClick={handleClick} id="globalfeed-tab" className="feed-tabs">GlobalFeed</a>
    );
}

function FeedTab() {
    const { authState, articleState } = useSelector(state => ({ authState: state.auth, articleState: state.articleList}));

    return (
        <div>
            <ul>
                <GlobalFeed />
                <YourFeed token={authState.token} />
            </ul>
            <hr />
        </div>
    );
}

export default FeedTab;