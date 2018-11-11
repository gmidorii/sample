import * as React from 'react'

interface FormProps {}

const Form: React.SFC<FormProps> = props => (
  <div>
    <form>
      <input type="text"></input>
      <button type="submit">button</button>
    </form>
  </div>
)

export default Form