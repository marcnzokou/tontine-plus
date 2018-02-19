import React from 'react';
import { Route } from 'react-router-dom';

import { URL_MAIN_HOME, URL_SETTINGS } from '../Urls';

import Navbar from '../components/Navbar';
import Profile from '../components/Profile';

import Home from './Home';
import Settings from './Settings';

const Main = () => (
    <section>
      <Navbar />
      <div className="layout">
          <Route exact path={URL_MAIN_HOME} component={Home}/>
          <Route path={URL_SETTINGS} component={Settings}/>
      </div>
    </section>
);

export default Main;
