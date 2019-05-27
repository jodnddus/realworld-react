import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedTab from './FeedTab';
import ArticleList from '../ArticleList';
import Banner from './Banner';
import api from '../../api';
import {
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
} from '../../constants/actionTypes';

// const mapStateToProps = state => ({
//     ...state.articleList,
//     token: state.auth.token
// });

// const mapDispatchToProps = dispatch => ({
//     onLoad: (tab, pager, payload) => dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
//     onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED })
// });

function Home() {
    const { articleState, tokenState } = useSelector(state => ({ articleState: state.articleList, tokenState: state.auth.token }));
    const homeDispatch = useDispatch();
    const tab = tokenState ? 'feed' : 'all';
    const articlesPromise = tokenState ? api.Articles.feed : api.Articles.all;

    // 동기적으로 실행을 해서 모든 작업을 끝낸 후 render()로 넘어가야 함.a
    Promise.resolve(api.Articles.all()).then((res) => {
        homeDispatch({ type: HOME_PAGE_LOADED, tab, articlesPromise, res });
    });

    return (
        <div>
            <FeedTab />
            <ArticleList articles={articleState.articles} />
        </div>
    );
}

export default Home;