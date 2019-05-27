import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';
import api from '../api';
import './ArticlePreview.css'

const mapDispatchToProps = dispatch => ({
    favorite: slug => dispatch({
        type: ARTICLE_FAVORITED,
        payload: api.Articles.favorite(slug)
    }),
    unfavorite: slug => dispatch({
        type: ARTICLE_UNFAVORITED,
        payload: api.Articles.unfavorite(slug)
    })
});

const ArticlePreview = props => {
    const article = props.article;

    const handleClick = e => {
        e.preventDefault();
        console.log(props.article);
    }

    return (
        <div className="article-preview" key={article.slug}>
            {/* 유저정보로 이동하는 유저네임 */}
            <div className="info">
                {/* 유저정보로 이동하는 유저 프로필 사진 */}
                <div className="profile-info">
                    <Link to={`/@${article.author.username}`}>
                        <img src={article.author.image} className="frofile-img" />
                    </Link>
                    <div className="name-date">
                        <Link to={`/@${article.author.username}`} className="profile-info-username">
                            {article.author.username}
                        </Link>
                        <span className="date">
                            {new Date(article.createdAt).toDateString()}
                        </span>
                    </div>
                </div>
                <div className="favorite-btn">
                    <button onClick={handleClick}>
                        💗{article.favoritesCount}
                    </button>
                </div>
            </div>

            <Link to={`/article/${article.slug}`} className="description-info">
                <h1>{article.title}</h1>
                <h3>{article.description}</h3>
            </Link>
            <hr />
        </div>
    );
}

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);