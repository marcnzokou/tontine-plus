import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import SkyLight from 'react-skylight';

import { URL_SIGNIN, URL_HOME } from '../utils/Urls';

// containers
import Signin from './Signin';
import Home from './Home';

// components
import Header from './Header';
import Navbar from './Navbar';

import AddMember from './Members/form/Add';
import SettingMember from './Members/form/Setting';

class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = { refAdd: 'refAdd', refSetting: 'refSetting' };
  }
  render() {
    return (
      <div className="container">
        <Header appDOM={this} />
        <Navbar appDOM={this} members={this.props.all}/>
        <div className="container-inner">
          <Switch>
              <Route exact path={URL_HOME} component={Home}/>
              <Route path={URL_SIGNIN} component={Signin}/>
          </Switch>
        </div>

        <SkyLight hideOnOverlayClicked ref={this.state.refAdd} >
              <AddMember />
        </SkyLight>
        <SkyLight hideOnOverlayClicked ref={this.state.refSetting} >
              <SettingMember />
        </SkyLight>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  all : state.members
});

export default connect(mapStateToProps)(App);
