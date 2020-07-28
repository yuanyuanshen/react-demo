import React from 'react'

const AppContext = React.createContext()

export const AppContextProvider = AppContext.Provider
export const AppContextConsumer = AppContext.Consumer

class Parent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      type: 1,
      num: 1,
    }
    this.interval = null
  }

  componentDidMount() {
    if (this.interval) return
    setInterval(() => {
      this.setState({
        num: this.state.num + 1,
      })
    }, 500)
  }

  render() {
    return (
      <AppContextProvider value={this.state.type}>
        {this.props.children}
      </AppContextProvider>
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}

class Child extends React.PureComponent {
  constructor(props) {
    super(props)
    this.arr = []
  }

  componentWillMount() {
    for (let i = 0; i < 100; i++) {
      this.arr.push(<p key={i}>{i}</p>)
    }
  }

  render() {
    return (
      <div>
        <AppContextConsumer>{(type) => <div>{type}</div>}</AppContextConsumer>
        {this.arr}
      </div>
    )
  }
}

export default class App extends React.PureComponent {
  render() {
    return (
      <Parent>
        <Child></Child>
      </Parent>
    )
  }
}
