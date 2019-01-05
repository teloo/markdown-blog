import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Header from './header.jsx';
import Articles from './articles.jsx';

export default class ArticlesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          id: 'idA',
          subject: 'subjectA',
          content: 'contentA'
        },
        {
          id: 'idB',
          subject: 'subjectB',
          content: 'contentB'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Container fluid="true">
          <Articles articles={this.state.articles}/>
        </Container>
      </div>
    );
  }
}
