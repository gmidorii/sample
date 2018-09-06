import * as React from "react"
import { Board, calucurateWinner, nextFill } from "./Board";

export interface GameProps {
}
export interface GameState {
  history: Squares[]
  stepNumber: number
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
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
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
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    })
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calucurateWinner(current.squares)

    const moves = history.map((step: Squares, move: number) => {
      const desc = move ?
        `Go to move #${move}`:
        'Go to game start'
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}></button>
          </li>
        )
    })

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
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}
