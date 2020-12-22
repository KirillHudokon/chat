import {Provider} from 'react-redux'
function shallowWithRedux(
  Component,
  store,
  props = {}
) {
  return mount(
    <Provider store={store}>
        <Component {...props}/>
    </Provider>
  )
}

export {shallowWithRedux}