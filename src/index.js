import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';

import reducer from './reducers';

import './stylesheets/main.scss';
import App from './containers/App';

console.log(process.env.NODE_ENV);

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);