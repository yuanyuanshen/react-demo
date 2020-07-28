import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Clock from './components/Clock/Clock'
import Selector from './components/Selector/Selector'
import Context from './components/LocaleSample/index'
import Snapshot from './components/Snapshot/index'
import PureRedux from './components/Redux/PureRedux'
import Connect from './components/Connect/Connect'
import Profiler from './components/Profiler/Profiler'
import ProfilerNew from './components/Profiler/NewApi'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/clock" component={Clock} />
      <Route exact path="/selector" component={Selector} />
      <Route exact path="/context" component={Context} />
      <Route exact path="/snapshot" component={Snapshot} />
      <Route exact path="/pureredux" component={PureRedux} />
      <Route exact path="/connect" component={Connect} />
      <Route exact path="/profiler" component={Profiler} />
      <Route exact path="/profilerNew" component={ProfilerNew} />
    </Switch>
  </HashRouter>
)

export default BasicRoute
