import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Header from './header.jsx';

const renderArticleId = articleId => {
  if (articleId === undefined || articleId === null) {
    return '(new article)';
  } else {
    return articleId;
  }
};

export default class ArticleEditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.articleId = props.match.params.id;
  }
  render() {
    return (
      <div>
        <Header postButtonDisabled/>
        <Container fluid="true">
          <h1>Article Editor</h1>
          id: {renderArticleId(this.articleId)}
        </Container>
      </div>
    );
  }
}
