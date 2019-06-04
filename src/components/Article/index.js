import * as React from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import Articlemeta from './Articlemeta';
import api from '../../api';
import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
  article: state.article.article
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) => dispatch({ type: ARTICLE_PAGE_LOADED, payload })
});

class Article extends React.Component {
  componentDidMount() {
    Promise.resolve(Promise.all([
      api.Articles.get(this.props.match.params.id),
      api.Comments.forArticle(this.props.match.params.id)
    ])).then((res) => this.props.onLoad(res));
  }

  render() {
    return (
      <React.Fragment>
        <Articlemeta article={this.props.article} />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);