import  { Component } from 'react'

export class Comp2 extends Component {
  render() {
    return (
        <>
        
        <div>{`Hello ${this.props.name}`}</div>
        <h1>{"Hello world"}</h1>
        </>
    )
  }
}

export default Comp2