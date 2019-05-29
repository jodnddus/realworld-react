import { combineReducers } from 'redux';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import common from './reducers/common';

export default combineReducers({
    articleList,
    auth,
    common,
})