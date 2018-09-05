import * as React from "react"
import { Board, calucurateWinner, nextFill } from "./Board";

export interface GameProps {
}
export interface GameState {
  history: Squares[]
  xIsNext: boolean
}
export interface Squares {
  squares: string[]
}

export class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props)
    this.state = {
      history: [{
          squares: new Array<string>(9),
      }],
      xIsNext: true,
    }
  }

  handleClick(i: number) {
    const history = this.state.history
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calucurateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = nextFill(this.state.xIsNext)
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
    })
  }

  render() {
    const history = this.state.history
    const current = history[history.length - 1]
    const winner = calucurateWinner(current.squares)

    let status: string
    if (winner) {
      status = `Winner: ${winner}`
    } else {
      status = `Next player: ${nextFill(this.state.xIsNext)}`
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol></ol>
        </div>
      </div>
    )
  }
}
