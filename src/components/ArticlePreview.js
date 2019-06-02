import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';
import api from '../api';
import './ArticlePreview.css'

const mapDispatchToProps = dispatch => ({
    favorite: res => dispatch({
        type: ARTICLE_FAVORITED,
        payload: res
    }),
    unfavorite: res => dispatch({
        type: ARTICLE_UNFAVORITED,
        payload: res
    })
});

// 프레젠테이셔널 컴포넌트
const ArticlePreview = props => {
    const article = props.article;
    const favoriteButtonClass = article.favorited ? "favorite-article" : "not-favorite-article";

    const handleClick = e => {
        e.preventDefault();
        if (article.favorite) {
            console.log(article.slug);
            Promise.resolve(api.Articles.unfavorite(article.slug)).then((res) => {
                console.log(res);
                props.unfavorite(res);
            });
        } else {
            console.log(article.slug);
            Promise.resolve(api.Articles.favorite(article.slug)).then((res) => {
                console.log(res);
                props.favorite(res);
            });
        }
    };

    return (
        <div className="article-preview" key={props.key}>
            {/* 유저정보로 이동하는 유저네임 */}
            <div className="info">
                {/* 유저정보로 이동하는 유저 프로필 사진 */}
                <div className="profile-info">
                    <Link to={`/@${article.author.username}`}>
                        <img src={article.author.image} alt="" className="frofile-img" />
                    </Link>
                    <div className="name-date">
                        <Link to={`/@${article.author.username}`} className="profile-info-username">
                            {article.author.username}
                        </Link>
                        <span className="date">
                            {new Date(article.createdAt).toDateString()}
                        </span>
                        <h4>slug: {article.slug}</h4>
                    </div>
                </div>
                <div className="favorite-btn">
                    <button onClick={handleClick} className={favoriteButtonClass}>
                        <span role="img" aria-label="like">💗</span>{article.favoritesCount}
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