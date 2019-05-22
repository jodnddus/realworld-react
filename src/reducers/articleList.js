import {
    CHANGE_TAB,
} from '../constants/actionTypes';

const initialState = {
    articlesCount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            console.log(action);
            return {
                ...state,
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount,
            };
        default:
            return state;
    }
}