import React from 'react'
import './App.css'

const routerMap = [
  {
    pagePath: '#/clock',
    pageTitle: 'Clock',
  },
  {
    pagePath: '#/selector',
    pageTitle: 'Selector',
  },
  {
    pagePath: '#/context',
    pageTitle: 'Selector',
  },
  {
    pagePath: '#/snapshot',
    pageTitle: 'Snapshot',
  },
  {
    pagePath: '#/pureredux',
    pageTitle: 'PureRedux',
  },
]

export default class App extends React.Component {
  render() {
    return (
      <div>
        {routerMap.map((k) => (
          <a key={k.pagePath} href={k.pagePath}>
            {k.pageTitle}
          </a>
        ))}
      </div>
    )
  }
}


