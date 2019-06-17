import {
    CHANGE_TAB,
    ARTICLE_FAVORITED,
    ARTICLE_UNFAVORITED,
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
    APPLY_TAG_FILTER,
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
                        };
                    }
                    return article;
                })
            };
        case CHANGE_TAB:
            return {
                ...state,
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount,
                tab: action.tab,
                tag: null
            };
        case HOME_PAGE_LOADED:
            return {
                ...state,
                tags: action.payload[0].tags,
                articles: action.payload[1].articles,
                articlesCount: action.payload[1].articlesCount,
                tab: action.tab
            };
        case APPLY_TAG_FILTER:
            return {
                ...state,
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount,
                tag: action.tag,
            }
        case HOME_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
}