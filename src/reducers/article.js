import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_PAGE_LOADED: 
      return {
        ...state,
        usename: action.payload[0].article.author.usename,
        image: action.payload[0].article.author.image,
        title: action.payload[0].article.title,
        createdAt: action.payload[0].article.createdAt,
        comments: action.payload[1].comments
      };
    case ARTICLE_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
}