import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';

export default function Article(props) {
  return (
    <article>
      <h2>{props.subject}</h2>
      <div className="pt-3 pb-3">
      {props.content}
      </div>
      <Button variant="primary">
        <span className="fas fa-edit"/>
      </Button>
      <Button variant="danger">
        <span className="fas fa-trash"/>
      </Button>
      <hr/>
    </article>
  );
}

Article.propTypes = {
  subject: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
