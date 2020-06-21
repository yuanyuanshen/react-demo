import React from 'react'
import { LocaleContextConsumer } from './context'

export default class LocaleConsumer extends React.PureComponent {
  render() {
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
