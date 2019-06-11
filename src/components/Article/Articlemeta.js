import React from 'react';
import { Link } from 'react-router-dom';
import './Articlemeta.css';

const Articlemeta = props => {
  return (
    <div className="article-meta">
      <Link to={`/@${props.username}`} >
        <img src={props.image} alt="" className="article-profile-img" />
      </Link>

      <div className="article-info">
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