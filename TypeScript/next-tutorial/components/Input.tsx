import * as React from 'react'

interface InputProps {}
interface InputState {}

export default class Input extends React.Component<InputProps, InputState> {
  private inputElement: HTMLInputElement

  constructor(props: InputProps) {
    super(props)
  }

  clickButton() {
    console.log('hoge')
    console.log(this.inputElement.value)
  }

  render() {
    return (
      <div>
        <input
          ref={(input: HTMLInputElement) => {
            this.inputElement = input
          }}
          type="text"
        />
        <button onClick={() => this.clickButton()}>button</button>
      </div>
    )
  }
}
