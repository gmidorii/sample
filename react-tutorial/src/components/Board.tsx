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
    const status = `Next player: ${this.nextFill(this.state.xIsNext)}`

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