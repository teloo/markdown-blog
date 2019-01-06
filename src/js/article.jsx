import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';

export default function Article(props) {
  const article = props.article;
  const editLink = '/articles/update/' + article.id;
  return (
    <article>
      <h2>{article.subject}</h2>
      <div className="pt-3 pb-3">
      {article.content}
      </div>
      <LinkContainer to={editLink}>
        <Button variant="primary">
          <span className="fas fa-edit"/>
        </Button>
      </LinkContainer>
      <Button variant="danger">
        <span className="fas fa-trash"/>
      </Button>
      <hr/>
    </article>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};
