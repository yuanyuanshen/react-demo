import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App'
import Clock from './components/Clock/Clock'
import Selector from './components/Selector/Selector'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/clock" component={Clock} />
      <Route exact path="/selector" component={Selector} />
    </Switch>
  </HashRouter>
);


export default BasicRoute;

