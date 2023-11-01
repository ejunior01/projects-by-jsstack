import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <>
      <article>
        <h3>{props.post.title}</h3>
        <h4>{props.post.subtitle}</h4>
        <span>Likes: {props.likes}</span>
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape().isRequired,
};
