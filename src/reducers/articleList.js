import {
    CHANGE_TAB,
} from '../constants/actionTypes';

const initialState = {
    articles: [],
    articlesCount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            console.log(action.payload);
            return {
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount
            }
        default:
            return state;
    }
}