import * as React from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import Articlemeta from './Articlemeta';
import api from '../../api';
import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
  title: state.article.title,
  username: state.article.usename,
  image: state.article.image,
  createdAt: state.article.createdAt
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
        <div className="container">
          <h1>{this.props.title}</h1>
          <Articlemeta
            username={this.props.username}
            image={this.props.image}
            createdAt={this.props.createdAt} />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);