import React, { createContext } from 'react'

const Context = createContext()

const Provider = Context.Provider
const Consumer = Context.Consumer

const MyOrder = (title) => (Wrapper) =>
  class MyOrder extends React.PureComponent {
    render() {
      return (
        <div>
          <h3>{title}</h3>
          <Wrapper></Wrapper>
        </div>
      )
    }
  }

@MyOrder('Decorators')
class Order extends React.PureComponent {
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
        <Consumer>
          {(value) => (
            <div>
              {value.type}
              <button
                onClick={() => {
                  value.changeType()
                }}
              >
                修改父组件type值
              </button>
            </div>
          )}
        </Consumer>
        {this.arr}
      </div>
    )
  }
}

export default class Decorators extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      type: 1,
    }
  }

  changeType = () => {
    this.setState({
      type: this.state.type + 1,
    })
  }

  render() {
    const params = {
      type: this.state.type,
      changeType: this.changeType,
    }
    return (
      <Provider value={params}>
        <Order />
      </Provider>
    )
  }
}
