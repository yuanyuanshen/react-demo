import React from 'react'
import PropTypes from 'prop-types'
import { LocaleContextConsumer } from './context'

export default class LocaleConsumer extends React.PureComponent {
  static contextTypes = {
    test: PropTypes.object,
  }

  render() {
    console.log(this.context.test)
    return (
      <LocaleContextConsumer>
        {(locale) => {
          return (
            <div>
              <button> {locale.cancel}</button>
              <button> {locale.submit}</button>
            </div>
          )
        }}
      </LocaleContextConsumer>
    )
  }
}
