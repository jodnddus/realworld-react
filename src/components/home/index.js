import React from 'react';
import { connect } from 'react-redux';
import FeedTab from './FeedTab';
import ArticleList from '../ArticleList';
import api from '../../api';
import {
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.articleList,
    token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) => dispatch({ type: HOME_PAGE_LOADED, payload }),
    onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
    componentWillMount() {
        Promise.resolve(api.Articles.all()).then((res) => {
            this.props.onLoad(res);
        });
    }
    render() {
        return (
            <React.Fragment>
                <FeedTab />
                <ArticleList articles={this.props.articles} />
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);