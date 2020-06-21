import React from 'react'
import LocaleProvider from './provider'
import LocaleConsumer from './consumer'

export default class Context extends React.PureComponent {
  render() {
    return (
      <div>
        <LocaleProvider>
          <div>
            <br />
            <LocaleConsumer />
          </div>
        </LocaleProvider>
        {/* <LocaleConsumer /> */}
      </div>
    )
  }
}
