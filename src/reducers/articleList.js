import {
    CHANGE_TAB,
    ARTICLE_FAVORITED,
    ARTICLE_UNFAVORITED,
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
} from '../constants/actionTypes';

const initialState = {
    articles: [
        {
            author: [],
        }
    ],
    articlesCount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ARTICLE_FAVORITED:
        case ARTICLE_UNFAVORITED:
            return {
                ...state,
                articles: state.articles.map(article => {
                    if (article.slug === action.payload.article.slug) {
                        return {
                            ...article,
                            favorite: action.payload.article.favorited,
                            favoritesCount: action.payload.article.favoritesCount
                        }
                    }
                })
            };
        case CHANGE_TAB:
            return {
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount
            };
        case HOME_PAGE_LOADED:
            console.log("1");
            return {
                ...state,
                pager: action.pager,
                articles: action.res.articles,
                articlesCount: action.res.articlesCount,
                currentPage: 0,
                tab: action.tab
            };
        case HOME_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
}