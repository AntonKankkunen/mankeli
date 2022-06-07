import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { PageTwo } from './pages/Page2';
import { Page } from './pages/Kysely'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Page} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/page2" exact component={PageTwo} />
    </Switch>
  </BrowserRouter>
);

export default App;