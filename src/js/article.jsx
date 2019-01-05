import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';

export default function Article(props) {
  const editLink = '/articles/update/' + props.id;
  return (
    <article>
      <h2>{props.subject}</h2>
      <div className="pt-3 pb-3">
      {props.content}
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
  id: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
