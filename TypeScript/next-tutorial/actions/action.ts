import { Action } from 'redux'

export interface AllAction extends Action {
  type: ActionTypes.ALL
  text: string
}
export const allAction = (text: string): AllAction => ({
  type: ActionTypes.ALL,
  text
})

export interface OneAction extends Action {
  type: ActionTypes.ONE
  num: number
}

export const oneAction = (num: number): OneAction => ({
  type: ActionTypes.ONE,
  num
})

export enum ActionTypes {
  ALL = 'ALL',
  ONE = 'ONE'
}
