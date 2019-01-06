import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
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
          <Form>
            <FormGroup>
              <FormControl type="text" placeholder="Title"/>
            </FormGroup>
            <FormGroup>
              <FormControl as="textarea" rows="15" placeholder="Content (Markdown)"/>
            </FormGroup>
            <Button variant="primary">
              Send
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
