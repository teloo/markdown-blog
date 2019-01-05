import React from 'react';
import PropTypes from 'prop-types';
import Article from './article.jsx';

export default function Articles(props) {
  const articleElements = props.articles.map(a => (
    <Article key={a.id} id={a.id} subject={a.subject} content={a.content}/>
  ));
  return <div>{articleElements}</div>;
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
};
