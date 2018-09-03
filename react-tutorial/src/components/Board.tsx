import * as React from "react"

export interface BoardProps {
}
export interface BoardState {
  squares: string[]
}


export class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props)
    this.state = {
      squares: new Array<string>(9),
    }
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice()
    squares[i] = 'X'
    this.setState({squares: squares})
  }

  renderSquare(i: number) {
    return (
      <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    const status = 'Next player: X'

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

export class Square extends React.Component<SquareProps, {}> {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}