import React from 'react'
import { LocaleContextProvider } from './context'

const enStrings = {
  submit: 'Submit',
  cancel: 'Cancel',
}

const cnStrings = {
  submit: '提交',
  cancel: '取消',
}

export default class LocaleProvider extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      locale: cnStrings,
    }
  }

  toggleLocale = () => {
    const locale = this.state.locale === enStrings ? cnStrings : enStrings
    this.setState({ locale })
  }

  render() {
    return (
      <LocaleContextProvider value={this.state.locale}>
        <button onClick={this.toggleLocale}>切换语言</button>
        {this.props.children}
      </LocaleContextProvider>
    )
  }
}
