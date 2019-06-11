import * as React from "react";
import { connect } from 'react-redux';
import Articlemeta from './Articlemeta';
import api from '../../api';
import './Article.css';
import {
  ARTICLE_PAGE_LOADED,
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
  title: state.article.title,
  username: state.article.username,
  image: state.article.image,
  createdAt: state.article.createdAt,
  body: state.article.body
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
    const markup = { __html: this.props.body };
    return (
      <React.Fragment>
        <div className="container">
          <div className="article-banner">
            <h1>{this.props.title}</h1>
            <Articlemeta
              username={this.props.username}
              image={this.props.image}
              createdAt={this.props.createdAt} />
          </div>
          <div className="article-body">
            <div dangerouslySetInnerHTML={markup}></div>
            <hr />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);