import * as React from "react"

export interface BoardProps {
}
export interface BoardState {
  squares: string[]
  xIsNext: boolean
}


export class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props)
    this.state = {
      squares: new Array<string>(9),
      xIsNext: false,
    }
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice()
    if (calucurateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.nextFill(this.state.xIsNext)
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  renderSquare(i: number) {
    return (
      <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />
    )
  }

  nextFill(isNext: boolean) : string {
    return isNext ? 'X' : 'O'
  }

  render() {
    const winner = calucurateWinner(this.state.squares)
    let status: string
    if (winner) {
      status = `Winner: ${winner}`
    } else {
      status = `Next player: ${this.nextFill(this.state.xIsNext)}`
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export interface SquareProps {
  value: string
  onClick(): void
}

const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

const calucurateWinner = (squares: string[]) : string => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}