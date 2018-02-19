import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signin from './Signin';
import Main from './Main';
import { URL_SIGNIN, URL_MAIN } from '../Urls';
import Footer from '../components/Footer';

const App = () => (
  <div className="container">
    <Switch>
        <Route exact path={URL_SIGNIN} component={Signin}/>
        <Route path={URL_MAIN} component={Main}/>
    </Switch>
    <Footer />
  </div>
);

export default App;
