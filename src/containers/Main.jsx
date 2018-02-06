import React from 'react';
import { Route } from 'react-router-dom';

import { URL_MAIN_HOME, URL_SETTINGS } from '../Urls';

import Header from '../components/Header';
import Home from './Home';
import Settings from './Settings';

const Main = () => (
    <div>
        <Header />
        <section>
            <Route exact path={URL_MAIN_HOME} component={Home}/>
            <Route path={URL_SETTINGS} component={Settings}/>
        </section>
    </div>
);

export default Main;
