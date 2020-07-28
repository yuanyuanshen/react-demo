import React from 'react'
import PropTypes from 'prop-types'

export default class Parent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      type: 1,
    }
  }

  // static childContextTypes = {
  //   type: PropTypes.number,
  // }

  componentWillMount() {
    setInterval(() => {
      this.setState({
        type: this.state.type + 1,
      })
    }, 500)
  }

  getChildContext() {
    return {
      type: this.state.type,
    }
  }

  render() {
    // return this.props.children
    return <Child></Child>
  }
}

Parent.childContextTypes = {
  type: PropTypes.number,
}

// const Comp = (props, context) => {
//   const arr = []
//   for (let i = 0; i < 100; i++) {
//     arr.push(<p key={i}>{i}</p>)
//   }

//   return (
//     <div>
//       <p>{context.type}</p>
//       {arr}
//     </div>
//   )
// }

// Comp.contextTypes = {
//   type: PropTypes.number,
// }

class Child extends React.PureComponent {
  constructor(props) {
    super(props)
    this.arr = []
  }

  // static contextTypes = {
  //   type: PropTypes.number,
  // }

  // componentWillMount() {
  //   for (let i = 0; i < 100; i++) {
  //     this.arr.push(<p key={i}>{i}</p>)
  //   }
  // }

  // componentDidUpdate() {
  //   console.log(this.context.type)
  // }

  render() {
    return (
      <div>
        <div>{this.context.type}</div>
        {/* {this.arr} */}
      </div>
    )
  }
}

Child.contextTypes = {
  type: PropTypes.number,
}

// export default class App extends React.PureComponent {
//   render() {
//     return (
//       <Parent>
//         {/* <Comp /> */}
//         <Child />
//       </Parent>
//     )
//   }
// }
