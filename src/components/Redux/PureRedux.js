/* eslint-disable no-func-assign */
import React from 'react'
import { combineReducers, bindActionCreators, createStore } from 'redux'

function run() {
  const initialState = { count: 0 }

  // reducer
  const counter = function (state = initialState, action) {
    switch (action.type) {
      case 'PLUS_ONE':
        return { count: state.count + 1 }
      case 'MINUS_ONE':
        return { count: state.count - 1 }
      case 'COUNT':
        return { count: state.count + action.payload.count }
      default:
        break
    }
    return state
  }

  const todos = (state = {}) => state

  // Action Creator
  function plusOne() {
    return { type: 'PLUS_ONE' }
  }
  function minusOne() {
    return { type: 'MINUS_ONE' }
  }
  function count(count) {
    return { type: 'COUNT', payload: { count } }
  }
  // const store = createStore(counter)
  const store = createStore(
    combineReducers({
      counter,
      todos,
    })
  )

  store.subscribe(() => {
    console.log(store.getState())
  })

  plusOne = bindActionCreators(plusOne, store.dispatch)

  // store.dispatch(plusOne())
  plusOne()
  store.dispatch(minusOne())
  store.dispatch(count(5))
}

export default () => (
  <div>
    <button onClick={run}>点击</button>
    <p>** 打开控制台查看运行结果</p>
  </div>
)
