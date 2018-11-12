import * as React from 'react'
import { Dispatch } from 'redux'
import { PureForm } from '../components/Form'
import { changeFormText, Actions } from '../actions/Form'
import { RootState } from '..'
import { connect } from 'react-redux'

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

export const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(PureForm)
