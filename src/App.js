import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLoc: null,
      bombLoc: null,
      guess: 5
    }
  }

componentDidMount(){
  let treasure = Math.floor(Math.random()*this.state.board.length)
  let bomb = Math.floor(Math.random()*this.state.board.length)
  this.setState({treasureLoc: treasure, bombLoc: bomb})
}

  handleGamePlay= (index) => {
    //destructuring
    const {board, treasureLoc, bombLoc, guess} = this.state
    let newGuess = this.state.guess - 1
    this.setState({guess: newGuess})
    if(guess === 1 && treasureLoc !== index && bombLoc !== index){
      board[index] = "🙅🏾‍♀️"
      this.setState({board: board})
       setTimeout(() => {alert ("Dirty barnacles, you ran out of turns. You lost this game.")}, 100)
    } else if (treasureLoc===index){
      board[index] = "💍"
      this.setState({board: board})
      setTimeout(() => {alert ("Will you take this treasure? You won the game!!!")}, 100) (window.location.reload(true), 6000)
    } else if (bombLoc===index){
      board[index] = "💣"
      this.setState({board: board})
      setTimeout(() => {alert ("You the bomb...in a bad way. You lost this game!!!")}, 100) //window.location.reload(false), 6000)
    } else {
        //index is the parameter
        board[index] = "🌴"
        this.setState({board: board})}
  }

  render(){
    console.log("treasure:", this.state.treasureLoc)
    console.log("bomb:", this.state.bombLoc)
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="gameboard">
        {this.state.board.map((value, index) => {
          return (
              <Square
                value={value}
                  index={index}
                  key={index} handleGamePlay={this.handleGamePlay}
                />
            )
        })}
      </div>
      <h2>Guesses Left: {this.state.guess} </h2>
      </>
    )
  }
}
export default App
