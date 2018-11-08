import { AllAction, OneAction, ActionTypes } from '../actions/action'
import { AnyAction } from 'redux'

export interface InputState {
  text: string
  num: number
}

export type InputAction = AllAction | OneAction

export const inputReducer = (state: InputState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.ALL:
      return {
        text: action.text,
        num: state.num
      }
    case ActionTypes.ONE:
      return {
        text: state.text,
        num: action.num
      }
    default:
      return state
  }
}
