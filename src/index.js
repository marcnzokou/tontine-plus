import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './stylesheets/main.scss';
import App from './containers/App';

ReactDOM.render(
  <HashRouter>
      <App />
  </HashRouter>,
  document.getElementById('root'),
);
