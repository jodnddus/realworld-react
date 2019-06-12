import React from 'react';
import { connect } from 'react-redux';
import MainView from './MainView';
import api from '../../api';
import Tags from './Tags';
import {
    HOME_PAGE_LOADED,
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.home,
    token: state.common.token,
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) => dispatch({ type: HOME_PAGE_LOADED, payload })
});

class Home extends React.Component {
    componentDidMount() {
        Promise.resolve(Promise.all([
            api.Tags.getAll(),
            api.Articles.all()
        ])).then((res) => this.props.onLoad(res));
    }

    render() {
        return (
            <div className="home">
                <MainView />
                <Tags tags={this.props.tags} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);