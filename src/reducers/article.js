import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED
} from '../constants/actionTypes';
import marked from 'marked';

export default (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_PAGE_LOADED: 
      return {
        ...state,
        username: action.payload[0].article.author.username,
        image: action.payload[0].article.author.image,
        title: action.payload[0].article.title,
        createdAt: action.payload[0].article.createdAt,
        body: marked(action.payload[0].article.body, {sanitize: true}),
        comments: action.payload[1].comments
      };
    case ARTICLE_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
}