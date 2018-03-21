import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { URL_SIGNIN, URL_HOME } from '../utils/Urls';

// containers
import Signin from './Signin';
import Home from './Home';

// components
import Header from './Header';
import Navbar from './Navbar';

const App = () => (
  <div className="container">
    <Header />
    <Navbar />
    <div className="container-inner">
      <Switch>
          <Route exact path={URL_HOME} component={Home}/>
          <Route path={URL_SIGNIN} component={Signin}/>
      </Switch>
    </div>
  </div>
);

export default App;
