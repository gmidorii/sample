import * as React from 'react'

export interface BoardProps {
  squares: string[]
  onClick(i: number): void
  nowPushed: number
}

export interface BoardState {
  squares: string[]
  xIsNext: boolean
}

export class Board extends React.Component<BoardProps, BoardState> {
  renderSquare(i: number) {
    if (this.props.nowPushed === i) {
      return (
        <Square
          key={i}
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          nowPushed={true}
        />
      )
    }
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        nowPushed={false}
      />
    )
  }

  render() {
    const list: JSX.Element[] = []
    for (let i = 0; i < 3; i++) {
      const x = i * 3
      list.push(
        <div className="board-row">
          {this.renderSquare(x + 0)}
          {this.renderSquare(x + 1)}
          {this.renderSquare(x + 2)}
        </div>
      )
    }
    return (
      <div>
        <div className="status">{status}</div>
        {list}
      </div>
    )
  }
}

export interface SquareProps {
  value: string
  onClick(i: string): void
  nowPushed: boolean
}

const Square = (props: SquareProps) => {
  if (props.nowPushed) {
    return (
      <button
        className="square pushed-square"
        onClick={() => props.onClick(props.value)}
      >
        {props.value}
      </button>
    )
  }
  return (
    <button className="square" onClick={() => props.onClick(props.value)}>
      {props.value}
    </button>
  )
}

export const calucurateWinner = (squares: string[]): string => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export const nextFill = (isNext: boolean): string => {
  return isNext ? 'X' : 'O'
}
