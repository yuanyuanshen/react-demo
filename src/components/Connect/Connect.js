import React from 'react'
import { createStore, bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'

class Counter extends React.PureComponent {
  render() {
    const { minusOne, plusOne, count } = this.props
    return (
      <div>
        <button onClick={minusOne}>-</button>
        <span>{count}</span>
        <button onClick={plusOne}>+</button>
      </div>
    )
  }
}

const initialCount = { count: 0 }

function minusOne() {
  return { type: 'MINUS_ONE' }
}

function plusOne() {
  return { type: 'PLUS_ONE' }
}

function counterReducer(state = initialCount, action) {
  switch (action.type) {
    case 'MINUS_ONE':
      return { count: state.count - 1 }
    case 'PLUS_ONE':
      return { count: state.count + 1 }
    default:
      break
  }
  return state
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ minusOne, plusOne }, dispatch)
}

const CountWithStore = connect(mapStateToProps, mapDispatchToProps)(Counter)

const store = createStore(
  counterReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default class CounterUser extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <CountWithStore></CountWithStore>
      </Provider>
    )
  }
}
