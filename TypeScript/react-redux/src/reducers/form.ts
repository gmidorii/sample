import { Actions } from '../actions/form'

export type State = {
  text: string
}

const init = () => ({
  form: {
    text: ''
  }
})

export const form = (state: any = init, action: Actions) => {
  switch (action.type) {
    case 'INPUT':
      console.log(action.text)
      return {
        text: action.text
      }
    default:
      return state
  }
}
