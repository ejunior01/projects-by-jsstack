import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import style from './Post.scss';

export default function Post(props) {
  return (
    <article
      className={
        props.post.remove ? `${style.post} ${style.deleted}` : style.post
      }
    >
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <br />
      <small>{props.post.subtitle}</small>
      <br />
      Media: {props.likes / 2}
    </article>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    remove: PropTypes.bool.isRequired,
  }).isRequired,
};
