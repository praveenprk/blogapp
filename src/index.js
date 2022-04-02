import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import Routers from './routers/Routers'
import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)