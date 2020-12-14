import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {shallow} from 'enzyme';
function shallowWithRedux(
  Component,
  reducer,
  {
    initialState,
    store = createStore(reducer, initialState)
  } = {}
) {
    console.debug(Component)
  return shallow(
    <Provider store={store}>
      {Component}
    </Provider>
  )

}

export {shallowWithRedux}