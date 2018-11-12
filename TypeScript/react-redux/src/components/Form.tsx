import * as React from 'react'

export interface FormProps {
  text: string
  onChange: (text: string) => void
}

export const PureForm: React.SFC<FormProps> = props => (
  <div>
    <input
      type="text"
      value={props.text}
      onChange={e => props.onChange(e.currentTarget.value)}
    />
    <button type="submit">button</button>
  </div>
)
