import { combineReducers } from 'redux';
import articleList from './reducers/articleList';
import auth from './reducers/auth';

export default combineReducers({
    articleList,
    auth,
})