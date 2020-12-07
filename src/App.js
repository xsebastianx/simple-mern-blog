import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Article from './components/articles/Article';
import Articles from './components/articles/Articles';
import ArticleForm from './components/articles/ArticleForm';

export default function App() {
  return (
    <div>
      <Router>
        <Container>
          <Switch>
            <Route path='/articles/new' component={ArticleForm} />
            <Route path='/articles/:articleId/edit' component={ArticleForm} />
            <Route path='/articles/:articleId' component={Article} />
            <Route path='/articles' component={Articles} />
          </Switch>
        </Container>
      </Router>

    </div>
  )
}


