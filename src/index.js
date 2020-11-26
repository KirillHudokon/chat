import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faSpinner)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
