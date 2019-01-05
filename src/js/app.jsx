import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ArticlesPage from './articles-page.jsx';
import ArticleEditorPage from './article-editor-page.jsx';
import NotFoundPage from './not-found-page.jsx';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ArticlesPage} />
          <Route exact path="/articles" component={ArticlesPage} />
          <Route path="/articles/new" component={ArticleEditorPage} />
          <Route path="/articles/update/:id" component={ArticleEditorPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
