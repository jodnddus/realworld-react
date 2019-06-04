import React from 'react';
import { connect } from 'react-redux';
import MainView from './MainView';
import api from '../../api';
import {
    HOME_PAGE_LOADED,
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
    token: state.common.token,
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) => dispatch({ type: HOME_PAGE_LOADED, payload })
});

class Home extends React.Component {
    componentDidMount() {
        Promise.resolve(api.Articles.all()).then((res) => {
            this.props.onLoad(res);
        });
    }

    render() {
        return (
            <React.Fragment>
                <MainView />
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);