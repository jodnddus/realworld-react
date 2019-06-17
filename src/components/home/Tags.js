import React from 'react';
import api from '../../api';
import './Tags.css'

const Tags = props => {
  const tags = props.tags;
  if (tags) {
    return (
      <div className="tag-list">
        {
          tags.map(tag => {
            const handlelick = e => {
              e.preventDefault();
              Promise.resolve(api.Articles.byTag(tag)).then((res) => {
                props.onClickTag(tag, res);
              });
            };
            
            return (
              <a href="''" key={tag} className="tag-name" onClick={handlelick}>#{tag}</a>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>Loading Tags...</div>
    )
  }
}

export default Tags;