import * as React from 'react'
import { render } from 'react-dom'
import { createStore, Action, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as form from './reducers/form'
import { Form } from './containers/form'

export interface RootState {
  form: form.State
}

const reducer = combineReducers({
  form: form.form
})

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <Form />
  </Provider>
)

render(<App />, document.getElementById('root'))
