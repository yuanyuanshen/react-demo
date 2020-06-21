import React from 'react'

export default class Snapshot extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      msg: [],
    }
  }

  handleNewMessage = () => {
    this.setState((preState) => ({
      msg: [`msg ${preState.msg.length}`, ...preState.msg],
    }))
  }

  getSnapshotBeforeUpdate() {
    return this.rootNode.scrollHeight
  }

  componentDidUpdate(prevProps, prevState, prevScrollHeight) {
    const scrollTop = this.rootNode.scrollTop
    if (scrollTop < 5) return
    this.rootNode.scrollTop =
      scrollTop + (this.rootNode.scrollHeight - prevScrollHeight)
  }

  componentDidMount() {
    for (let i = 0; i < 20; i++) this.handleNewMessage()
    this.interval = setInterval(() => {
      if (this.state.msg.length > 100) {
        window.clearInterval(this.interval)
        return
      }
      this.handleNewMessage()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div
        style={{ maxHeight: '200px', overflowY: 'scroll' }}
        ref={(n) => (this.rootNode = n)}
      >
        {this.state.msg.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    )
  }
}
