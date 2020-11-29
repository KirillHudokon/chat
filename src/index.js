import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/';
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faPlay, faSpinner, faTimes, faUpload } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faSpinner, faUpload, faTimes)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
