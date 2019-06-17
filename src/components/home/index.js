import React from 'react';
import { connect } from 'react-redux';
import MainView from './MainView';
import api from '../../api';
import Tags from './Tags';
import {
    HOME_PAGE_LOADED, APPLY_TAG_FILTER,
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.home,
    token: state.common.token,
});

const mapDispatchToProps = dispatch => ({
    onLoad: (tab, payload) => dispatch({ type: HOME_PAGE_LOADED, tab, payload }),
    onClickTag: (tag, payload) => dispatch({ type: APPLY_TAG_FILTER, tag, payload })
});

class Home extends React.Component {
    componentDidMount() {
        const tab = this.props.token ? 'feed' : 'all';
        Promise.resolve(Promise.all([
            api.Tags.getAll(),
            api.Articles.all()
        ])).then((res) => this.props.onLoad(tab, res));
    }

    render() {
        return (
            <div className="home">
                <MainView />
                <Tags tags={this.props.tags} onClickTag={this.props.onClickTag} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);