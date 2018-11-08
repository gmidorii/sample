import * as React from 'react'
import Root from '../components/Root'
import { createStore } from 'redux'
import rootReducer from '../reducers/reducer'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

const Index: React.SFC = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}
export default Index
