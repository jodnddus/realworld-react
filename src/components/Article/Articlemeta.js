import React from 'react';
import { Link } from 'react-router-dom';

const Articlemeta = props => {
  console.log(props.article)
  return (
    <div>
      <h1>{typeof props.article}</h1>
    </div>
  );
}

export default Articlemeta;