import React from 'react'
import PropTypes from 'prop-types'
import LocaleProvider from './provider'
import LocaleConsumer from './consumer'

export default class Context extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      test: { test: 'test' },
    }
  }
  static childContextTypes = {
    test: PropTypes.object,
  }

  getChildContext() {
    return {
      test: this.state.test,
    }
  }
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
