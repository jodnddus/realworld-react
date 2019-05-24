import React from 'react';
import { connect } from 'react-redux';
import MainView from './MainView';
import Banner from './Banner';
import api from '../../api';
import {
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
} from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
    onLoad: payload => dispatch({ type: HOME_PAGE_LOADED, payload }),
    onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
    componentWillMount() {
        Promise.resolve(api.Articles.all()).then((res) => {
            this.props.onLoad(res);
        });
    }

    componentWillUnmount() {
        this.props.onUnload();
    }
    render() {
        return (
            <MainView />
        );
    }
}

export default connect(() => ({}), mapDispatchToProps)(Home);