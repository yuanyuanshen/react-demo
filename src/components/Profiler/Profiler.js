import React from 'react'
import PropTypes from 'prop-types'

class Parent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      type: 1,
      num: 1,
    }
    this.interval = null
  }

  componentWillMount() {
    if (this.interval) return
    this.interval = setInterval(() => {
      this.setState({
        num: this.state.num + 1,
      })
    }, 500)
  }

  getChildContext() {
    return {
      type: this.state.type,
    }
  }

  render() {
    return this.props.children
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}

Parent.childContextTypes = {
  type: PropTypes.number,
}

const Comp = (props, context) => {
  const arr = []
  for (let i = 0; i < 100; i++) {
    arr.push(<p key={i}>{i}</p>)
  }

  return (
    <div>
      <p>{context.type}</p>
      {arr}
    </div>
  )
}

Comp.contextTypes = {
  type: PropTypes.number,
}

export default class App extends React.PureComponent {
  render() {
    return (
      <Parent>
        <Comp />
      </Parent>
    )
  }
}
