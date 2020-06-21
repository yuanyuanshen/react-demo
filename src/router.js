import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Clock from './components/Clock/Clock'
import Selector from './components/Selector/Selector'
import Context from './components/LocaleSample/index'
import Snapshot from './components/Snapshot/index'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/clock" component={Clock} />
      <Route exact path="/selector" component={Selector} />
      <Route exact path="/context" component={Context} />
      <Route exact path="/snapshot" component={Snapshot} />
    </Switch>
  </HashRouter>
)

export default BasicRoute
