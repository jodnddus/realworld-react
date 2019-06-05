import React from 'react';
import { Link } from 'react-router-dom';

const Articlemeta = props => {
  return (
    <div className="article-meta">
      <Link to={`/@${props.username}`}>
        <img src={props.image} alt={props.username} />
      </Link>

      <div className="info">
        <Link to={`/@${props.username}`} className="author">
          {props.username}
        </Link>
        <span className="date">
          {new Date(props.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
}

export default Articlemeta;