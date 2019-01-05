import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Header from './header.jsx';

export default class ArticleEditorPage extends React.Component {
  render() {
    return (
      <div>
        <Header postButtonDisabled/>
        <Container fluid="true">
          <h1>This page is not found!</h1>
        </Container>
      </div>
    );
  }
}
