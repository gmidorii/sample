import { Action } from 'redux'

export type Actions = InputAction

export interface InputAction extends Action {
  type: 'INPUT'
  text: string
}
