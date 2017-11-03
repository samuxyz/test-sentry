import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div>
      <h1>App</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>
      {props.children}
    </div>
  );
};
