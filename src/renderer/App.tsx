import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import EditorView from './views/Editor/index';

const customHistory = createBrowserHistory();

const App = () => {
  return (
    <>
      <Router history={customHistory}>
        <Switch>
          <Route path="/" component={EditorView} />
        </Switch>
      </Router>
    </>
  );
};

render(<App />, document.getElementById('app'));
