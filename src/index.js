import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Footer from './components/Footer/Footer'
import './index.css'
import Routers from './routers/Routers'
import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers/>
      <Footer/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)