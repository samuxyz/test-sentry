import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router';
import { App, About, Inbox } from 'components';
import Raven from 'raven-js';
Raven.config(
  'https://85e65cd34ee74a65b10a6617ea543b25@sentry.io/238336',
  {
    release: '1.0.2'
  },
).install();

const route = (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/inbox" component={Inbox} />
    </Route>
  </Router>
);
Raven.setUserContext({
    email: 'samurlrrr@zaza.com',
    id: '123445'
});
render(route, document.getElementById('app'));
