import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Actions } from '../actions/Form'
import { RootState } from '..'

interface FormProps {
  text: string
  onChange: (text: string) => void
}

const Form: React.SFC<FormProps> = props => (
  <div>
    <input
      type="text"
      value={props.text}
      onChange={e => props.onChange(e.currentTarget.value)}
    />
    <button type="submit">button</button>
  </div>
)

const mapStateToProps = (state: RootState) => ({
  text: state.form.text
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
  return {
    onChange: (text: string) => {
      dispatch({ type: 'INPUT', text: text })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
