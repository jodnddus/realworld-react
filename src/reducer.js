import { combineReducers } from 'redux';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import common from './reducers/common';
import article from './reducers/article';

export default combineReducers({
    articleList,
    auth,
    common,
    article
})