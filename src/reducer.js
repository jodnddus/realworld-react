import { combineReducers } from 'redux';
import articleList from './reducers/articleList';
import common from './reducers/common';
import auth from './reducers/auth';

export default combineReducers({
    articleList,
    common,
    auth,
})