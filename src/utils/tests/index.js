import {Provider} from 'react-redux'
function mountWithRedux(
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

export { mountWithRedux }