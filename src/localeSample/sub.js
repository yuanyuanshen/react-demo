import React from 'react'
import { LocaleContextConsumer } from './context'

export default class LocaleConsumer extends React.PureComponent {
  render () {
    return (
      <LocaleContextConsumer>
        {locale => (
          <div>
            < button > {locale.cancel}</button >& nbsp;
            < button > {locale.submit}</button >& nbsp;
          </div>
        )}
      </LocaleContextConsumer>
    )
  }
}