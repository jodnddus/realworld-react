import {
    CHANGE_TAB,
} from '../constants/actionTypes';

const initialState = {
    articles: [],
    articlesCount: 500
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            Promise.resolve(action.payload).then((res) => {
                const data = {
                    ...state,
                    articles: res.articles,
                    articlesCount: 400,
                }
                return data;
            })
        default:
            return state;
    }
}