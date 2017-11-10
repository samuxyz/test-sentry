import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { App, About, Inbox } from 'components';
import Raven from 'raven-js';
Raven.config(
  'https://7cbf0201a7f2478ca690ca4624a6950f@sentry.io/242977',
  { release: '1.0.0' },
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
  email: 'sam@sentry.com',
  id: '123456',
});

render(route, document.getElementById('app'));
