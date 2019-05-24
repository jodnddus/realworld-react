import React from 'react';
import { connect } from 'react-redux';
import ArticlePreview from './ArticlePreview';

const ArticleList = props => {
    return (
        <div>
            {
                props.articles.map(article => {
                    return (
                        <ArticlePreview article={article} kay={article.slug} />
                    );
                })
            }
        </div>
    );
}

export default ArticleList;