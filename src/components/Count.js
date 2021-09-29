import React, { Component } from 'react'

class Count extends Component{

  render(){
    return(
      <>
      <div className="square" onClick={this.handleClick}>
        {this.props.value}
      </div>
      </>
    )
  }
}
export default Count
